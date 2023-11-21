import React from "react";

import { FlatList, Text, View } from "react-native";
import AnimatedLottieView from "lottie-react-native";

import SwimTime from "../../assets/animations/swim-time.json";
import RestTime from "../../assets/animations/rest-time.json";

import BaseTheme from "../../components/BaseTheme";
import BodyTheme from "../../components/BodyTheme";
import FooterTheme from "../../components/FooterTheme";

import * as Button from "../../components/Button";

const timesMapper = [
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
  return (
    <BaseTheme>
      <BodyTheme>
        <View className="min-w-full h-64 items-center py-8 px-6">
          <View className="flex-1 justify-center items-center mt-10">
            <Text className="text-5xl font-bold text-zinc-800 antialiased">
              00:00:00
            </Text>
            <Text className="text-sm font-light text-zinc-600">Swim time!</Text>
          </View>
          <FlatList
            horizontal
            initialScrollIndex={timesMapper.length - 1}
            ItemSeparatorComponent={() => (
              <View className="border border-zinc-300 mx-10 my-0" />
            )}
            data={timesMapper}
            keyExtractor={(_, index) => String(index)}
            renderItem={({ item }) => (
              <View className="items-center justify-center">
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
        <View className="min-w-full h-96 my-6 bg-app-isabeline">
          {/* <AnimatedLottieView source={SwimTime} autoPlay loop speed={1} /> */}
          <AnimatedLottieView
            source={RestTime}
            autoPlay
            loop
            speed={1}
            // duration={20000}
          />
        </View>
      </BodyTheme>
      <FooterTheme>
        <Button.Root>
          <Button.Title text="Slide to rest" />
        </Button.Root>
      </FooterTheme>
    </BaseTheme>
  );
}
