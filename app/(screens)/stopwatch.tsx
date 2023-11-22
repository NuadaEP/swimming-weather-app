import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";

import { FlatList, Text, View } from "react-native";
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

type StopwatchMapper = {
  activity: "Rest Time!" | "Work Time!";
  time: string;
};

const timesMapper: StopwatchMapper[] = [
  {
    activity: "Rest time!",
    time: "00:00:00",
  },
  {
    activity: "Work Time!",
    time: "00:00:00",
  },
  {
    activity: "Rest time!",
    time: "00:00:00",
  },
  {
    activity: "Work Time!",
    time: "00:00:00",
  },
  {
    activity: "Rest time!",
    time: "00:00:00",
  },
  {
    activity: "Work Time!",
    time: "00:00:00",
  },
  {
    activity: "Rest time!",
    time: "00:00:00",
  },
  {
    activity: "Work Time!",
    time: "00:00:00",
  },
  {
    activity: "Rest time!",
    time: "00:00:00",
  },
  {
    activity: "Work Time!",
    time: "00:00:00",
  },
  {
    activity: "Rest time!",
    time: "00:00:00",
  },
  {
    activity: "Work Time!",
    time: "00:00:00",
  },
  {
    activity: "Rest time!",
    time: "00:00:00",
  },
  {
    activity: "Work Time!",
    time: "00:00:00",
  },
];

export default function Stopwatch() {
  const [stopwatch, setStopwatch] = useState<StopwatchMapper[]>([]);
  const [activity, setActivity] = useState<"work" | "rest">("work");
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const stopwatchTimerRef = useRef<StopwatchTimerMethods>(null);

  const { timeToWork } = useSettings();

  const isWorkTime = useMemo(() => activity === "work", [activity]);

  const handleTime = useCallback(() => {
    setActivity(isWorkTime ? "work" : "rest");
    const snapshot = millisecondsToSeconds(
      stopwatchTimerRef.current?.getSnapshot() as number
    );
    console.log(activity);

    setStopwatch((current) => [
      ...current,
      { activity: isWorkTime ? "Work Time!" : "Rest Time!", time: snapshot },
    ]);

    stopwatchTimerRef.current?.reset();

    play();
  }, []);

  const play = useCallback(() => {
    setTimeout(() => stopwatchTimerRef.current?.play(), 500);
  }, []);

  // const stopStopwatch = () => {
  //   if (intervalId) {
  //     clearInterval(intervalId);
  //     setIntervalId(null);
  //   }
  // };

  useEffect(() => {
    if (elapsedTime >= 10000) {
      const [seconds] = millisecondsToSeconds(
        stopwatchTimerRef.current?.getSnapshot() as number
      ).split(",");

      if (isWorkTime) {
        const workTimeNumber = Number(timeToWork.replace(" seconds", ""));

        if (Number(seconds) >= workTimeNumber) {
          handleTime();
        }
      }
    }
  }, [elapsedTime]);

  useEffect(() => {
    play();

    if (!intervalId) {
      const interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1000);
      }, 1000);

      setIntervalId(interval);
    }
  }, [stopwatchTimerRef]);

  return (
    <BaseTheme>
      <BodyTheme>
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
            speed={1}
          />
        </View>
      </BodyTheme>
      <FooterTheme>
        <Button.Root onPress={handleTime}>
          <Button.Title text={isWorkTime ? "Slide to Rest" : "Slide to Swim"} />
        </Button.Root>
      </FooterTheme>
    </BaseTheme>
  );
}
