import React from "react";
import { FlatList, Text } from "react-native";

import BaseTheme from "../../components/BaseTheme";
import * as Option from "../../components/Option";
import { Check, Ruler } from "lucide-react-native";
import { View } from "react-native";
import BodyTheme from "../../components/BodyTheme";
import { useSettings } from "../../contexts/Settings";
import { useNavigation } from "expo-router";

const poolSizeMapper = ["12.5 meters", "25 meters", "50 meters", "100 meters"];

export default function PoolSize() {
  const { poolSize, onSelect } = useSettings();
  const { goBack } = useNavigation();

  return (
    <BaseTheme>
      <BodyTheme>
        <View className="my-6 px-4">
          <Text className="font-bold text-lg antialiased uppercase text-zinc-800">
            Pool Size Setting
          </Text>
        </View>
        <FlatList
          data={poolSizeMapper}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            const isSelected = item === poolSize;

            return (
              <Option.Root
                onPress={() => {
                  onSelect("poolSize", item);
                  goBack();
                }}
                className={isSelected ? "bg-zinc-200" : ""}
              >
                <Option.Label>
                  <Ruler
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
