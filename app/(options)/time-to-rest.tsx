import React from "react";
import { FlatList, Text } from "react-native";

import BaseTheme from "../../components/BaseTheme";
import * as Option from "../../components/Option";
import { Check, TimerReset } from "lucide-react-native";
import { View } from "react-native";
import BodyTheme from "../../components/BodyTheme";
import { useSettings } from "../../contexts/Settings";
import { useNavigation } from "expo-router";

const timeToRestSettings = [
  "5 seconds",
  "10 seconds",
  "15 seconds",
  "20 seconds",
  "25 seconds",
  "30 seconds",
  "35 seconds",
  "40 seconds",
  "45 seconds",
  "50 seconds",
  "55 seconds",
  "60 seconds",
  "65 seconds",
  "70 seconds",
  "75 seconds",
  "80 seconds",
  "85 seconds",
  "90 seconds",
  "95 seconds",
  "100 seconds",
];

export default function TimeToRest() {
  const { timeToRest, onSelect } = useSettings();
  const { goBack } = useNavigation();

  return (
    <BaseTheme>
      <BodyTheme>
        <View className="my-6 px-4">
          <Text className="font-bold text-lg antialiased uppercase text-zinc-800">
            Time To Work Setting
          </Text>
        </View>
        <FlatList
          data={timeToRestSettings}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            const isSelected = item === timeToRest;

            return (
              <Option.Root
                onPress={() => {
                  onSelect("timeToRest", item);
                  goBack();
                }}
                className={isSelected ? "bg-zinc-200" : ""}
              >
                <Option.Label>
                  <TimerReset
                    opacity={0.9}
                    color="rgb(63 63 70)"
                    strokeWidth={1}
                    size={32}
                  />
                  <Text className="font-semibold text-zinc-700 text-sm">
                    {item}
                  </Text>
                </Option.Label>
                {isSelected && (
                  <Option.Value>
                    <Check
                      opacity={0.9}
                      color="rgb(63 63 70)"
                      strokeWidth={1}
                      size={32}
                    />
                  </Option.Value>
                )}
              </Option.Root>
            );
          }}
        />
      </BodyTheme>
    </BaseTheme>
  );
}
