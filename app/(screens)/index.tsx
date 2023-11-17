import React from "react";
import { Text, View } from "react-native";
import { ArrowRightIcon } from "lucide-react-native";

import * as Button from "../../components/Button";

export default function ListActivities() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-4 pb-6">
      <View className="flex-1">
        <Text>Content</Text>
      </View>
      <View className="flex-2">
        <Button.Root href="/prepare">
          <Button.Title text="Prepare" />
          <ArrowRightIcon color="white" className="w-4 h-4" />
        </Button.Root>
      </View>
    </View>
  );
}
