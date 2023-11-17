import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function Overview() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Link href="/history" asChild>
        <Pressable className="border border-zinc-400 border-spacing-2 rounded-lg px-6 py-4">
          <Text className="font-semibold text-lg">History</Text>
        </Pressable>
      </Link>
    </View>
  );
}
