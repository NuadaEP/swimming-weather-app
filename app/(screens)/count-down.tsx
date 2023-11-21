import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

import BaseTheme from "../../components/BaseTheme";
import BodyTheme from "../../components/BodyTheme";
import FooterTheme from "../../components/FooterTheme";

import * as Button from "../../components/Button";
import { Plus } from "lucide-react-native";

export default function CountDown() {
  return (
    <BaseTheme>
      <BodyTheme>
        <Text>10 seconds</Text>
        <Text>the activity going to start in</Text>
      </BodyTheme>
      <FooterTheme>
        <Button.Root href="(screens)/count-down" outlined>
          <Button.Title text="Add 10 seconds" />
          <Plus color="rgb(39 39 42)" className="w-4 h-4" />
        </Button.Root>
      </FooterTheme>
    </BaseTheme>
  );
}
