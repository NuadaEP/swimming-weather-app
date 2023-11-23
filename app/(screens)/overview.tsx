import React from "react";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { ArrowRightIcon, Check, Ruler } from "lucide-react-native";

import BaseTheme from "../../components/BaseTheme";
import BodyTheme from "../../components/BodyTheme";
import FooterTheme from "../../components/FooterTheme";

import * as Button from "../../components/Button";
import * as Option from "../../components/Option";

export default function Overview() {
  return (
    <BaseTheme>
      <BodyTheme isScrollable>
        <View className="min-w-full h-52 mb-6 bg-zinc-200" />
        <View className="flex-row justify-between px-8 mb-4">
          <View className="items-center">
            <Text className="font-semibold text-sm">1400 meters</Text>
            <Text className="font-light text-xs">DISTANCE</Text>
          </View>
          <View className="items-center">
            <Text className="font-semibold text-sm">00:00.00</Text>
            <Text className="font-light text-xs">DURATION</Text>
          </View>
          <View className="items-center">
            <Text className="font-semibold text-sm">00</Text>
            <Text className="font-light text-xs">Calories</Text>
          </View>
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
              Pool Size
            </Text>
          </Option.Label>
          <Option.Value>
            <Text className="font-light text-zinc-600 text-sm">poolSize</Text>
            <Check
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={28}
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
              Pool Size
            </Text>
          </Option.Label>
          <Option.Value>
            <Text className="font-light text-zinc-600 text-sm">poolSize</Text>
            <Check
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={28}
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
              Pool Size
            </Text>
          </Option.Label>
          <Option.Value>
            <Text className="font-light text-zinc-600 text-sm">poolSize</Text>
            <Check
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={28}
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
              Pool Size
            </Text>
          </Option.Label>
          <Option.Value>
            <Text className="font-light text-zinc-600 text-sm">poolSize</Text>
            <Check
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={28}
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
              Pool Size
            </Text>
          </Option.Label>
          <Option.Value>
            <Text className="font-light text-zinc-600 text-sm">poolSize</Text>
            <Check
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={28}
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
              Pool Size
            </Text>
          </Option.Label>
          <Option.Value>
            <Text className="font-light text-zinc-600 text-sm">poolSize</Text>
            <Check
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={28}
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
              Pool Size
            </Text>
          </Option.Label>
          <Option.Value>
            <Text className="font-light text-zinc-600 text-sm">poolSize</Text>
            <Check
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={28}
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
              Pool Size
            </Text>
          </Option.Label>
          <Option.Value>
            <Text className="font-light text-zinc-600 text-sm">poolSize</Text>
            <Check
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={28}
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
              Pool Size
            </Text>
          </Option.Label>
          <Option.Value>
            <Text className="font-light text-zinc-600 text-sm">poolSize</Text>
            <Check
              opacity={0.9}
              color="rgb(63 63 70)"
              strokeWidth={1}
              size={28}
            />
          </Option.Value>
        </Option.Root>
      </BodyTheme>
      <FooterTheme>
        <Link href="/history" asChild>
          <Button.Root>
            <Button.Title text="Go back to history" />
            <ArrowRightIcon color="white" className="w-4 h-4" />
          </Button.Root>
        </Link>
      </FooterTheme>
    </BaseTheme>
  );
}
