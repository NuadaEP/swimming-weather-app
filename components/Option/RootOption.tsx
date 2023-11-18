import React, { ComponentProps } from "react";

import { Pressable, View } from "react-native";

type RootProps = ComponentProps<typeof View> & {
  onPress?: () => void;
};

export function RootOption({ onPress, ...props }: RootProps) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row justify-between"
      {...props}
    />
  );
}
