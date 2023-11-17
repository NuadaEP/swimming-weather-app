import React from "react";
import { Text } from "react-native";

type TitleProps = {
  text: any;
};

export function Title({ text }: TitleProps) {
  return (
    <Text className="font-semibold text-lg text-white antialiased mx-2">
      {text}
    </Text>
  );
}
