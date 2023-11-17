import React from "react";
import { FlatList, Text, View } from "react-native";
import { ArrowRightIcon } from "lucide-react-native";

import * as Button from "../../components/Button";

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
    <View className="flex-1 items-center justify-center bg-app-isabeline p-4 pb-8">
      <View className="flex-1 min-w-full">
        <FlatList
          data={data}
          ItemSeparatorComponent={() => (
            <View className="border-b-2 border-zinc-200" />
          )}
          ListEmptyComponent={() => <Text>No register to show here</Text>}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="flex-row justify-between items-center my-4">
              <View className="items-start">
                <Text className="font-semibold text-lg text-zinc-800">
                  {item.swam}
                </Text>
                <Text className="text-sm font-light text-zinc-500">
                  {item.time}
                </Text>
              </View>
              <View className="items-end">
                <Text className="font-semibold text-lg text-zinc-800">
                  {item.pace}
                </Text>
                <Text className="text-sm font-light text-zinc-500">
                  {item.date}
                </Text>
              </View>
            </View>
          )}
        />
      </View>

      <View className="flex-2 pt-2">
        <Button.Root href="/prepare">
          <Button.Title text="Prepare" />
          <ArrowRightIcon color="white" className="w-4 h-4" />
        </Button.Root>
      </View>
    </View>
  );
}
