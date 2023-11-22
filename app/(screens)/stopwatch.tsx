import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";

import { FlatList, Pressable, Text, View } from "react-native";
import AnimatedLottieView from "lottie-react-native";
import StopwatchTimer, {
  StopwatchTimerMethods,
} from "react-native-animated-stopwatch-timer";

import SwimTime from "../../assets/animations/swim-time.json";
import RestTime from "../../assets/animations/rest-time.json";

import BaseTheme from "../../components/BaseTheme";
import BodyTheme from "../../components/BodyTheme";
import FooterTheme from "../../components/FooterTheme";

import * as Button from "../../components/Button";

import { millisecondsToSeconds } from "../../helpers/milliseconds-to-seconds";
import { useSettings } from "../../contexts/Settings";
import { Link, Stack } from "expo-router";
import { Pause, Play, Settings } from "lucide-react-native";

type StopwatchMapper = {
  activity: "Rest Time!" | "Work Time!";
  time: string;
};

export default function Stopwatch() {
  const [stopwatch, setStopwatch] = useState<StopwatchMapper[]>([]);
  const [activity, setActivity] = useState<"work" | "rest">("work");
  const [stopRun, setStopRun] = useState<"resume" | "paused">("resume");
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const stopwatchTimerRef = useRef<StopwatchTimerMethods>(null);

  const { timeToWork, timeToRest } = useSettings();

  const isWorkTime = useMemo(() => activity === "work", [activity]);
  const isPaused = useMemo(() => stopRun === "paused", [stopRun]);

  const workTime = useCallback(() => {
    const snapshot = millisecondsToSeconds(
      stopwatchTimerRef.current?.getSnapshot() as number
    );

    setStopwatch((current) => [
      ...current,
      { activity: `Work Time!`, time: snapshot },
    ]);

    setActivity("work");

    reset();
  }, [activity, stopwatch]);

  const restTime = useCallback(() => {
    const snapshot = millisecondsToSeconds(
      stopwatchTimerRef.current?.getSnapshot() as number
    );

    setStopwatch((current) => [
      ...current,
      { activity: `Rest Time!`, time: snapshot },
    ]);

    setActivity("rest");

    reset();
  }, [activity, stopwatch]);

  const reset = useCallback(() => {
    stopwatchTimerRef.current?.reset();

    play();
  }, []);

  const play = useCallback(() => {
    setTimeout(() => stopwatchTimerRef.current?.play(), 500);
  }, []);

  useEffect(() => {
    if (elapsedTime >= 500) {
      const [seconds] = millisecondsToSeconds(
        stopwatchTimerRef.current?.getSnapshot() as number
      ).split(",");

      if (isWorkTime) {
        const workTimeNumber = Number(timeToWork.replace(" seconds", ""));

        if (Number(seconds) >= workTimeNumber) restTime();
      } else {
        const restTimeNumber = Number(timeToRest.replace(" seconds", ""));

        if (Number(seconds) >= restTimeNumber) workTime();
      }
    }
  }, [elapsedTime, activity]);

  const startWatch = useCallback(() => {
    if (!intervalId) {
      const interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1000);
      }, 1000);

      setIntervalId(interval);
    }
  }, []);

  useEffect(() => {
    play();

    startWatch();
  }, [stopwatchTimerRef]);

  const pause = useCallback(() => {
    stopwatchTimerRef.current?.pause();

    setStopRun("paused");

    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [intervalId]);

  const resume = useCallback(() => {
    play();

    setStopRun("resume");

    startWatch();
  }, []);

  return (
    <BaseTheme>
      <BodyTheme>
        <Stack.Screen
          options={{
            headerRight: () => (
              <Pressable
                onPress={() => {
                  if (isPaused) resume();
                  else pause();
                }}
                className="py-2 pl-6 pr-1"
              >
                {isPaused ? (
                  <Pause
                    opacity={0.9}
                    color="rgb(63 63 70)"
                    strokeWidth={2}
                    size={16}
                  />
                ) : (
                  <Play
                    opacity={0.9}
                    color="rgb(63 63 70)"
                    strokeWidth={2}
                    size={16}
                  />
                )}
              </Pressable>
            ),
            headerLeft: () => (
              <Link href="/(modals)/settings" asChild>
                <Pressable onPress={pause} className="py-2 pr-6 pl-1">
                  <Settings
                    opacity={0.9}
                    color="rgb(63 63 70)"
                    strokeWidth={2}
                    size={18}
                  />
                </Pressable>
              </Link>
            ),
          }}
        />

        <View className="min-w-full h-64 items-center py-8 px-6">
          <View className="flex-1 justify-center items-center my-3">
            <StopwatchTimer
              ref={stopwatchTimerRef}
              leadingZeros={2}
              trailingZeros={2}
              containerStyle={{
                display: "flex",
                justifyContent: "center",
                minWidth: "100%",
                gap: 4,
              }}
              digitStyle={{
                minWidth: "9%",
                maxWidth: "20%",
                fontSize: 48,
                fontWeight: "bold",
                color: "#27272a",
              }}
              separatorStyle={{
                fontSize: 42,
                fontWeight: "bold",
                color: "#27272a",
              }}
            />
            <Text className="text-sm font-light text-zinc-600">
              {isWorkTime ? "Swim time!" : "Rest time!"}
            </Text>
          </View>
          <FlatList
            horizontal
            initialScrollIndex={
              stopwatch.length === 0 ? stopwatch.length : stopwatch.length - 1
            }
            onScrollToIndexFailed={() => false}
            data={stopwatch}
            keyExtractor={(_, index) => String(index)}
            renderItem={({ item }) => (
              <View className="items-center justify-center border-l border-zinc-300 px-4">
                <Text className="text-sm font-bold text-zinc-800 antialiased">
                  {item.time}
                </Text>
                <Text className="text-xs font-light text-zinc-600">
                  {item.activity}
                </Text>
              </View>
            )}
          />
        </View>
        <View className="w-screen h-96 my-6 bg-app-isabeline">
          <AnimatedLottieView
            source={isWorkTime ? SwimTime : RestTime}
            autoPlay
            loop
            speed={isPaused ? 0.3 : 1}
          />
        </View>
      </BodyTheme>
      <FooterTheme>
        <Button.Root
          onPress={() => {
            if (isWorkTime) restTime();
            else workTime();
          }}
        >
          <Button.Title text={isWorkTime ? "Slide to Rest" : "Slide to Swim"} />
        </Button.Root>
      </FooterTheme>
    </BaseTheme>
  );
}
