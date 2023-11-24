import React from "react";
import { FlatList, Text, View } from "react-native";
import { Link } from "expo-router";

import BaseTheme from "../../components/BaseTheme";
import BodyTheme from "../../components/BodyTheme";
import FooterTheme from "../../components/FooterTheme";

import * as Button from "../../components/Button";
import AnimatedArrowIcon from "../../components/AnimatedArrowIcon";

const data = [
  {
    id: "001",
    swam: "1400m swam",
    time: "in 45 minutes",
    pace: "pace 50m/58s",
    date: "at 17/10/2023",
  },
  {
    id: "002",
    swam: "1400m swam",
    time: "in 45 minutes",
    pace: "pace 50m/58s",
    date: "at 17/10/2023",
  },
  {
    id: "003",
    swam: "1400m swam",
    time: "in 45 minutes",
    pace: "pace 50m/58s",
    date: "at 17/10/2023",
  },
  {
    id: "004",
    swam: "1400m swam",
    time: "in 45 minutes",
    pace: "pace 50m/58s",
    date: "at 17/10/2023",
  },
  {
    id: "005",
    swam: "1400m swam",
    time: "in 45 minutes",
    pace: "pace 50m/58s",
    date: "at 17/10/2023",
  },
  {
    id: "006",
    swam: "1400m swam",
    time: "in 45 minutes",
    pace: "pace 50m/58s",
    date: "at 17/10/2023",
  },
  {
    id: "007",
    swam: "1400m swam",
    time: "in 45 minutes",
    pace: "pace 50m/58s",
    date: "at 17/10/2023",
  },
  {
    id: "008",
    swam: "1400m swam",
    time: "in 45 minutes",
    pace: "pace 50m/58s",
    date: "at 17/10/2023",
  },
  {
    id: "009",
    swam: "1400m swam",
    time: "in 45 minutes",
    pace: "pace 50m/58s",
    date: "at 17/10/2023",
  },
  {
    id: "010",
    swam: "1400m swam",
    time: "in 45 minutes",
    pace: "pace 50m/58s",
    date: "at 17/10/2023",
  },
  {
    id: "011",
    swam: "1400m swam",
    time: "in 45 minutes",
    pace: "pace 50m/58s",
    date: "at 17/10/2023",
  },
];

export default function ListActivities() {
  return (
    <BaseTheme>
      <BodyTheme>
        <FlatList
          data={data}
          ItemSeparatorComponent={() => <View className="mt-4" />}
          ListEmptyComponent={() => <Text>No register to show here</Text>}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="flex-row justify-between items-center my-4 px-4">
              <View className="items-start">
                <Text className="font-semibold text-sm text-zinc-800">
                  {item.swam}
                </Text>
                <Text className="text-xs font-light text-zinc-500">
                  {item.time}
                </Text>
              </View>
              <View className="items-end">
                <Text className="font-semibold text-sm text-zinc-800">
                  {item.pace}
                </Text>
                <Text className="text-xs font-light text-zinc-500">
                  {item.date}
                </Text>
              </View>
            </View>
          )}
        />
      </BodyTheme>

      <FooterTheme>
        <Link href="/prepare" asChild>
          <Button.Root>
            <Button.Title text="Prepare" />
            <AnimatedArrowIcon />
          </Button.Root>
        </Link>
      </FooterTheme>
    </BaseTheme>
  );
}
