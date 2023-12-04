import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import * as Haptics from "expo-haptics";

import {
  Pause,
  Play,
  Settings,
  CheckCheck,
  HeartPulse,
  Dumbbell,
} from "lucide-react-native";
import AnimatedLottieView from "lottie-react-native";
import StopwatchTimer, {
  StopwatchTimerMethods,
} from "react-native-animated-stopwatch-timer";
import { View as MView, MotiView, useDynamicAnimation } from "moti";
import { Audio } from "expo-av";

import SwimTime from "../../assets/animations/swim-time.json";
import RestTime from "../../assets/animations/rest-time.json";

import BaseTheme from "../../components/BaseTheme";
import BodyTheme from "../../components/BodyTheme";
import FooterTheme from "../../components/FooterTheme";

import * as Button from "../../components/Button";

import { millisecondsToSeconds } from "../../helpers/milliseconds-to-seconds";

import { useSettings } from "../../contexts/Settings";
import { StopwatchMapper, useActivity } from "../../contexts/Activity";

import StopwatchSound from "../../assets/sounds/stopwatch-sound.aiff";

let beep: Audio.Sound | undefined;

export default function Stopwatch() {
  const [stopwatch, setStopwatch] = useState<StopwatchMapper[]>([]);
  const [activity, setActivity] = useState<"work" | "rest">("work");
  const [stopRun, setStopRun] = useState<"resume" | "paused">("resume");
  const [almostTimeout, setAlmostTimeout] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const stopwatchTimerRef = useRef<StopwatchTimerMethods>(null);

  const { timeToWork, timeToRest } = useSettings();
  const { handleActivity } = useActivity();

  const isWorkTime = useMemo(() => activity === "work", [activity]);
  const isPaused = useMemo(() => stopRun === "paused", [stopRun]);

  const workTime = useCallback(() => {
    createSound().then((sound) => sound.stopAsync());
    const milliseconds = stopwatchTimerRef.current?.getSnapshot() as number;
    const time = millisecondsToSeconds(milliseconds);

    setStopwatch((current) => [
      ...current,
      { activity: `Work Time!`, time, milliseconds },
    ]);

    setActivity("work");
    setAlmostTimeout(false);

    if (isPaused) setStopRun("resume");

    reset();
  }, [activity, stopwatch, stopRun, almostTimeout]);

  const restTime = useCallback(() => {
    createSound().then((sound) => sound.stopAsync());

    const milliseconds = stopwatchTimerRef.current?.getSnapshot() as number;
    const time = millisecondsToSeconds(milliseconds);

    setStopwatch((current) => [
      ...current,
      { activity: `Rest Time!`, time, milliseconds },
    ]);

    setActivity("rest");
    setAlmostTimeout(false);

    if (isPaused) setStopRun("resume");

    reset();
  }, [activity, almostTimeout, stopRun]);

  const reset = useCallback(() => {
    stopwatchTimerRef.current?.reset();

    play();
  }, []);

  const play = useCallback(() => {
    actionVibrate();

    setTimeout(() => stopwatchTimerRef.current?.play(), 500);
  }, []);

  useEffect(() => {
    if (elapsedTime >= 500) {
      const [seconds] = millisecondsToSeconds(
        stopwatchTimerRef.current?.getSnapshot() as number
      ).split(",");

      const [time] = timeToRest.split(" ");

      let remaningTime = Number(time) - Number(seconds);

      if (isWorkTime) {
        const [time] = timeToWork.split(" ");

        remaningTime = Number(time) - Number(seconds);
      }

      if (remaningTime <= 2) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
        createSound().then((sound) => sound.playAsync());
      }

      if (isWorkTime) {
        const workTimeNumber = Number(timeToWork.replace(" seconds", ""));

        if (Number(seconds) >= workTimeNumber) restTime();
        else if (workTimeNumber - Number(seconds) <= 5) setAlmostTimeout(true);
      } else {
        const restTimeNumber = Number(timeToRest.replace(" seconds", ""));

        if (Number(seconds) >= restTimeNumber) workTime();
        else if (restTimeNumber - Number(seconds) <= 5) setAlmostTimeout(true);
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

  const actionVibrate = useCallback(() => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  }, []);

  const pause = useCallback(() => {
    stopwatchTimerRef.current?.pause();
    createSound().then((sound) => sound.stopAsync());

    setStopRun("paused");
    actionVibrate();

    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [intervalId]);

  const resume = useCallback(() => {
    play();

    actionVibrate();
    setStopRun("resume");

    startWatch();
  }, []);

  const animatedView = useDynamicAnimation(() => ({ scale: 1 }));

  const createSound = useCallback(async () => {
    if (beep) return beep;

    const { sound } = await Audio.Sound.createAsync(StopwatchSound);

    beep = sound;

    return beep;
  }, []);

  useEffect(() => {
    if (almostTimeout) animatedView.animateTo({ scale: 1.1 });
    else animatedView.animateTo({ scale: 1 });
  }, [almostTimeout]);

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
          <MView
            state={animatedView}
            className="flex-1 justify-center items-center my-3"
          >
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
              textCharStyle={{
                fontWeight: "bold",
                color: almostTimeout ? "rgb(248,113,113)" : "#27272a",
              }}
              digitStyle={{
                minWidth: "9%",
                maxWidth: "20%",
                fontSize: almostTimeout ? 52 : 48,
              }}
              separatorStyle={{
                fontSize: almostTimeout ? 46 : 42,
              }}
            />
            <Text className="text-sm font-light text-zinc-600">
              {isWorkTime ? "Swim time!" : "Rest time!"}
            </Text>
          </MView>
          <FlatList
            horizontal
            snapToEnd={false}
            // initialScrollIndex={stopwatch.length ?? 0}
            onScrollToIndexFailed={() => false}
            data={stopwatch}
            keyExtractor={(_, index) => String(index)}
            renderItem={({ item }) => (
              <MotiView
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "timing",
                  delay: 100,
                  duration: 300,
                }}
                className="items-center justify-center px-6"
              >
                <Text className="text-sm font-bold text-zinc-800 antialiased">
                  {item.time}
                </Text>
                <Text className="text-xs font-light text-zinc-600">
                  {item.activity}
                </Text>
              </MotiView>
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
        {isPaused && stopwatch.length >= 2 ? (
          <Link href="/overview" asChild>
            <Button.Root
              onPress={() => {
                stopwatchTimerRef.current?.pause();
                stopwatchTimerRef.current?.reset();
                intervalId && clearInterval(intervalId);
                handleActivity(stopwatch);
                actionVibrate();
              }}
              outlined
            >
              <Button.Title text="Finish Activity" />
              <CheckCheck
                opacity={0.9}
                color="rgb(63 63 70)"
                strokeWidth={2}
                size={32}
              />
            </Button.Root>
          </Link>
        ) : (
          <Button.Root
            onPress={() => {
              if (isWorkTime) restTime();
              else workTime();
            }}
          >
            <Button.Title
              text={isWorkTime ? "Press to Rest" : "Press to Swim"}
            />
            <MotiView
              from={{ scale: 1 }}
              animate={{ scale: 1.2 }}
              transition={{
                loop: true,
                type: "timing",
                duration: 500,
                delay: 100,
              }}
            >
              {isWorkTime ? (
                <HeartPulse
                  opacity={0.9}
                  color="white"
                  strokeWidth={2}
                  size={32}
                />
              ) : (
                <Dumbbell
                  opacity={0.9}
                  color="white"
                  strokeWidth={2}
                  size={32}
                />
              )}
            </MotiView>
          </Button.Root>
        )}
      </FooterTheme>
    </BaseTheme>
  );
}
