import React from "react";
import { Text } from "react-native";
import { useButtonRoot } from "./Root";

type TitleProps = {
  text: any;
};

export function Title({ text }: TitleProps) {
  const { outlined } = useButtonRoot();

  return (
    <Text
      className={`font-semibold text-lg ${
        outlined ? "text-zinc-800" : "text-white"
      } antialiased mx-2`}
    >
      {text}
    </Text>
  );
}
