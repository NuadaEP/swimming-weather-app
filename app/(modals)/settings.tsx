import React from "react";
import { Text, View } from "react-native";
import {
  ArrowRightIcon,
  Ruler,
  ChevronRight,
  Dumbbell,
  TimerReset,
} from "lucide-react-native";
import LottieView from "lottie-react-native";
import { Link } from "expo-router";

import SwimmingPool from "../../assets/animations/swimming-pool.json";

import * as Option from "../../components/Option";

import BaseTheme from "../../components/BaseTheme";
import BodyTheme from "../../components/BodyTheme";

import { useSettings } from "../../contexts/Settings";

export default function ModalSettings() {
  const { poolSize, timeToRest, timeToWork } = useSettings();

  return (
    <BaseTheme>
      <BodyTheme>
        <View className="flex-2 min-w-full h-96 my-6">
          <LottieView source={SwimmingPool} autoPlay />
        </View>
        <View className="flex-1 gap-6 mb-10">
          <Link href="/(options)/pool-size" asChild>
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
                <Text className="font-light text-zinc-600 text-sm">
                  {poolSize}
                </Text>
                <ChevronRight
                  opacity={0.9}
                  color="rgb(63 63 70)"
                  strokeWidth={1}
                  size={32}
                />
              </Option.Value>
            </Option.Root>
          </Link>

          <Link href="/(options)/time-to-work" asChild>
            <Option.Root>
              <Option.Label>
                <Dumbbell
                  opacity={0.9}
                  color="rgb(63 63 70)"
                  strokeWidth={1}
                  size={32}
                />
                <Text className="font-semibold text-zinc-700 text-sm">
                  Time to work
                </Text>
              </Option.Label>
              <Option.Value>
                <Text className="font-light text-zinc-600 text-sm">
                  {timeToWork}
                </Text>
                <ChevronRight
                  opacity={0.9}
                  color="rgb(63 63 70)"
                  strokeWidth={1}
                  size={32}
                />
              </Option.Value>
            </Option.Root>
          </Link>

          <Link href="/(options)/time-to-rest" asChild>
            <Option.Root>
              <Option.Label>
                <TimerReset
                  opacity={0.9}
                  color="rgb(63 63 70)"
                  strokeWidth={1}
                  size={32}
                />
                <Text className="font-semibold text-zinc-700 text-sm">
                  Time to rest
                </Text>
              </Option.Label>
              <Option.Value>
                <Text className="font-light text-zinc-600 text-sm">
                  {timeToRest}
                </Text>
                <ChevronRight
                  opacity={0.9}
                  color="rgb(63 63 70)"
                  strokeWidth={1}
                  size={32}
                />
              </Option.Value>
            </Option.Root>
          </Link>
        </View>
      </BodyTheme>
    </BaseTheme>
  );
}
