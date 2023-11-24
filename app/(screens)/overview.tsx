import React from "react";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import {
  ArrowRightIcon,
  Check,
  Clock,
  Dumbbell,
  Gauge,
  HeartPulse,
  Rabbit,
  Ruler,
  Turtle,
} from "lucide-react-native";
import AnimatedLottieView from "lottie-react-native";

import SwimFinish from "../../assets/animations/swim-finish.json";

import BaseTheme from "../../components/BaseTheme";
import BodyTheme from "../../components/BodyTheme";
import FooterTheme from "../../components/FooterTheme";

import * as Button from "../../components/Button";
import * as Option from "../../components/Option";

import { useActivity } from "../../contexts/Activity";
import { useSettings } from "../../contexts/Settings";
import { millisecondsToSeconds } from "../../helpers/milliseconds-to-seconds";

export default function Overview() {
  const {
    averageRestTime,
    averageSpeed,
    averageWorkTime,
    bestWorkTime,
    calories,
    distance,
    duration,
    hardestWorkTime,
    longerBreakTime,
  } = useActivity();

  const { poolSize } = useSettings();

  return (
    <BaseTheme>
      <BodyTheme isScrollable>
        <View className="min-w-full h-52 mb-6 items-center justify-start">
          <AnimatedLottieView source={SwimFinish} autoPlay resizeMode="cover" />
        </View>
        <View className="flex-row justify-between px-8 pb-4">
          <View className="items-center">
            <Text className="font-semibold text-sm">{distance}</Text>
            <Text className="font-light text-xs">DISTANCE</Text>
          </View>
          <View className="items-center">
            <Text className="font-semibold text-sm">
              {millisecondsToSeconds(duration, true)}
            </Text>
            <Text className="font-light text-xs">DURATION</Text>
          </View>
          <View className="items-center">
            <Text className="font-semibold text-sm">{calories}</Text>
            <Text className="font-light text-xs">Calories</Text>
          </View>
        </View>
        <Option.Root>
          <Option.Label>
            <Ruler
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={32}
            />
            <Text className="font-semibold text-zinc-700 text-sm">
              Pool Size
            </Text>
          </Option.Label>
          <Option.Value>
            <Text className="font-light text-zinc-600 text-sm">{poolSize}</Text>
            <Check
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={28}
            />
          </Option.Value>
        </Option.Root>
        <Option.Root>
          <Option.Label>
            <Dumbbell
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={32}
            />
            <Text className="font-semibold text-zinc-700 text-sm">
              Av. Time working
            </Text>
          </Option.Label>
          <Option.Value>
            <Text className="font-light text-zinc-600 text-sm">
              {millisecondsToSeconds(averageWorkTime)} seconds
            </Text>
            <Check
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={28}
            />
          </Option.Value>
        </Option.Root>
        <Option.Root>
          <Option.Label>
            <Clock
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={32}
            />
            <Text className="font-semibold text-zinc-700 text-sm">
              Av. Resting time
            </Text>
          </Option.Label>
          <Option.Value>
            <Text className="font-light text-zinc-600 text-sm">
              {millisecondsToSeconds(averageRestTime)} seconds
            </Text>
            <Check
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={28}
            />
          </Option.Value>
        </Option.Root>
        <Option.Root>
          <Option.Label>
            <Gauge
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={32}
            />
            <Text className="font-semibold text-zinc-700 text-sm">
              Best Time
            </Text>
          </Option.Label>
          <Option.Value>
            <Text className="font-light text-zinc-600 text-sm">
              {millisecondsToSeconds(bestWorkTime)} seconds
            </Text>
            <Check
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={28}
            />
          </Option.Value>
        </Option.Root>
        <Option.Root>
          <Option.Label>
            <Turtle
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={32}
            />
            <Text className="font-semibold text-zinc-700 text-sm">
              Hardest time
            </Text>
          </Option.Label>
          <Option.Value>
            <Text className="font-light text-zinc-600 text-sm">
              {millisecondsToSeconds(hardestWorkTime)} seconds
            </Text>
            <Check
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={28}
            />
          </Option.Value>
        </Option.Root>
        <Option.Root>
          <Option.Label>
            <HeartPulse
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={32}
            />
            <Text className="font-semibold text-zinc-700 text-sm">
              Longer break time
            </Text>
          </Option.Label>
          <Option.Value>
            <Text className="font-light text-zinc-600 text-sm">
              {millisecondsToSeconds(longerBreakTime)} seconds
            </Text>
            <Check
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={28}
            />
          </Option.Value>
        </Option.Root>
        <Option.Root>
          <Option.Label>
            <Rabbit
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={32}
            />
            <Text className="font-semibold text-zinc-700 text-sm">
              Av. Speed
            </Text>
          </Option.Label>
          <Option.Value>
            <Text className="font-light text-zinc-600 text-sm">
              {averageSpeed.toFixed(2)} meters/h
            </Text>
            <Check
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={28}
            />
          </Option.Value>
        </Option.Root>
      </BodyTheme>
      <FooterTheme>
        <Link href="/" asChild>
          <Button.Root>
            <Button.Title text="Go back to history" />
            <ArrowRightIcon color="white" className="w-4 h-4" />
          </Button.Root>
        </Link>
      </FooterTheme>
    </BaseTheme>
  );
}
