import React, { ComponentProps } from "react";
import { View } from "react-native";

type BaseThemeProps = ComponentProps<typeof View>;

export default function BaseTheme({ ...props }: BaseThemeProps) {
  return (
    <View
      className="flex-1 items-center justify-center bg-app-isabeline p-4 pb-8"
      {...props}
    />
  );
}
