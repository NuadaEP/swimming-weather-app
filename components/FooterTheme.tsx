import React, { ComponentProps } from "react";
import { View } from "react-native";

export default function FooterTheme({ ...props }: ComponentProps<typeof View>) {
  return <View className="flex-2 p-4 pb-10" {...props} />;
}
