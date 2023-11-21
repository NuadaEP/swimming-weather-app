import React from "react";
import { Text } from "react-native";

import BaseTheme from "../../components/BaseTheme";
import * as Option from "../../components/Option";
import { Check, Ruler } from "lucide-react-native";
import { View } from "react-native";
import { BodyTheme } from "../../components/BodyTheme";

export default function PoolSize() {
  return (
    <BaseTheme>
      <BodyTheme>
        <View className="my-6 px-4">
          <Text className="font-bold text-lg antialiased uppercase text-zinc-800">
            Pool Size Setting
          </Text>
        </View>
        <Option.Root>
          <Option.Label>
            <Ruler
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={32}
            />
            <Text className="font-semibold text-zinc-700 text-sm">
              12.5 meters
            </Text>
          </Option.Label>
        </Option.Root>
        <Option.Root className="bg-zinc-200">
          <Option.Label>
            <Ruler
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={32}
            />
            <Text className="font-semibold text-zinc-700 text-sm">
              25 meters
            </Text>
          </Option.Label>
          <Option.Value>
            <Check
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={32}
            />
          </Option.Value>
        </Option.Root>
        <Option.Root>
          <Option.Label>
            <Ruler
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={32}
            />
            <Text className="font-semibold text-zinc-700 text-sm">
              50 meters
            </Text>
          </Option.Label>
        </Option.Root>
        <Option.Root>
          <Option.Label>
            <Ruler
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={32}
            />
            <Text className="font-semibold text-zinc-700 text-sm">
              100 meters
            </Text>
          </Option.Label>
        </Option.Root>
      </BodyTheme>
    </BaseTheme>
  );
}
