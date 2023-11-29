import React from "react";
import { Text, View } from "react-native";
import { Ruler, Dumbbell, TimerReset } from "lucide-react-native";
import LottieView from "lottie-react-native";
import { Link } from "expo-router";
import { MotiView } from "moti";

import SwimmingPool from "../../assets/animations/swimming-pool.json";

import * as Button from "../../components/Button";
import * as Option from "../../components/Option";

import BaseTheme from "../../components/BaseTheme";
import BodyTheme from "../../components/BodyTheme";
import FooterTheme from "../../components/FooterTheme";

import { useSettings } from "../../contexts/Settings";
import AnimatedArrowIcon from "../../components/AnimatedArrowIcon";

const animationProps = {
  from: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export default function Prepare() {
  const { poolSize, timeToRest, timeToWork } = useSettings();

  return (
    <BaseTheme>
      <BodyTheme>
        <View className="flex-2 min-w-full h-96 my-6">
          <LottieView source={SwimmingPool} autoPlay />
        </View>
        <View className="flex-1 justify-around mb-10">
          <MotiView
            from={animationProps.from}
            animate={animationProps.animate}
            transition={{ duration: 500, type: "timing", delay: 100 }}
          >
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
                  <AnimatedArrowIcon variant="dark" />
                </Option.Value>
              </Option.Root>
            </Link>
          </MotiView>

          <MotiView
            from={animationProps.from}
            animate={animationProps.animate}
            transition={{ duration: 500, type: "timing", delay: 300 }}
          >
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
                  <AnimatedArrowIcon variant="dark" />
                </Option.Value>
              </Option.Root>
            </Link>
          </MotiView>

          <MotiView
            from={animationProps.from}
            animate={animationProps.animate}
            transition={{ duration: 500, type: "timing", delay: 500 }}
          >
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
                  <AnimatedArrowIcon variant="dark" />
                </Option.Value>
              </Option.Root>
            </Link>
          </MotiView>
        </View>
      </BodyTheme>

      <FooterTheme>
        <Link href="/count-down" asChild>
          <Button.Root>
            <Button.Title text="Start" />
            <AnimatedArrowIcon />
          </Button.Root>
        </Link>
      </FooterTheme>
    </BaseTheme>
  );
}
