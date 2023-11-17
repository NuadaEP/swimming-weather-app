import { Link } from "expo-router";
import React from "react";
import { Text, Pressable, View } from "react-native";

export default function ListActivities() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Link href="/prepare" asChild>
        <Pressable className="border border-zinc-400 border-spacing-2 rounded-lg px-6 py-4">
          <Text className="font-semibold text-lg">List Activities</Text>
        </Pressable>
      </Link>
    </View>
  );
}
