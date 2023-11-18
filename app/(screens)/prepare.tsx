import React from "react";
import { Pressable, Text, View } from "react-native";
import {
  ArrowRightIcon,
  Ruler,
  ChevronRight,
  Dumbbell,
  TimerReset,
} from "lucide-react-native";
import LottieView from "lottie-react-native";

import SwimmingPool from "../../assets/animations/swimming-pool.json";

import * as Button from "../../components/Button";
import { Link } from "expo-router";
import BaseTheme from "../../components/BaseTheme";

export default function Prepare() {
  return (
    <BaseTheme>
      <View className="flex-1 min-w-full">
        <View className="flex-2 min-w-full h-96 mb-6">
          <LottieView source={SwimmingPool} autoPlay />
        </View>
        <View className="flex-1 gap-14">
          <Link href="/(options)/pool-size" asChild>
            <Pressable className="flex-row justify-between">
              <View className="flex-row items-center gap-4">
                <Ruler
                  opacity={0.9}
                  color="rgb(63 63 70)"
                  strokeWidth={1}
                  size={32}
                />
                <Text className="font-semibold text-zinc-700 text-sm">
                  Pool Size
                </Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Text className="font-light text-zinc-600 text-sm">25m</Text>
                <ChevronRight
                  opacity={0.9}
                  color="rgb(63 63 70)"
                  strokeWidth={1}
                  size={32}
                />
              </View>
            </Pressable>
          </Link>

          <Link href="/(options)/time-to-work" asChild>
            <Pressable className="flex-row justify-between">
              <View className="flex-row items-center gap-4">
                <Dumbbell
                  opacity={0.9}
                  color="rgb(63 63 70)"
                  strokeWidth={1}
                  size={32}
                />
                <Text className="font-semibold text-zinc-700 text-sm">
                  Time to work
                </Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Text className="font-light text-zinc-600 text-sm">
                  50 seconds
                </Text>
                <ChevronRight
                  opacity={0.9}
                  color="rgb(63 63 70)"
                  strokeWidth={1}
                  size={32}
                />
              </View>
            </Pressable>
          </Link>

          <Link href="/(options)/time-to-rest" asChild>
            <Pressable className="flex-row justify-between">
              <View className="flex-row items-center gap-4">
                <TimerReset
                  opacity={0.9}
                  color="rgb(63 63 70)"
                  strokeWidth={1}
                  size={32}
                />
                <Text className="font-semibold text-zinc-700 text-sm">
                  Time to rest
                </Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Text className="font-light text-zinc-600 text-sm">
                  30 seconds
                </Text>
                <ChevronRight
                  opacity={0.9}
                  color="rgb(63 63 70)"
                  strokeWidth={1}
                  size={32}
                />
              </View>
            </Pressable>
          </Link>
        </View>
      </View>

      <View className="flex-2 pt-2">
        <Button.Root href="/countdonw">
          <Button.Title text="Start" />
          <ArrowRightIcon color="white" className="w-4 h-4" />
        </Button.Root>
      </View>
    </BaseTheme>
  );
}
