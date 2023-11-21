import React, { ComponentProps } from "react";
import { View } from "react-native";

export default function BodyTheme({ ...props }: ComponentProps<typeof View>) {
  return <View className="flex-1 min-w-full" {...props} />;
}