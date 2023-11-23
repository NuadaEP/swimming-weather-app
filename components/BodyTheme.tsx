import React, { ComponentProps } from "react";
import { View, ScrollView } from "react-native";

type BodyThemeProps = ComponentProps<typeof View> & {
  isScrollable?: boolean;
};

export default function BodyTheme({
  isScrollable = false,
  ...props
}: BodyThemeProps) {
  if (isScrollable)
    return <ScrollView className="flex-1 min-w-full" {...props} />;

  return <View className="flex-1 min-w-full" {...props} />;
}
