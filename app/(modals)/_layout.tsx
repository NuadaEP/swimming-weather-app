import React from "react";
import { Stack, router } from "expo-router";
import { Pressable, Text } from "react-native";

export { ErrorBoundary } from "expo-router";

export default function ModalsLayout() {
  return (
    <Stack
      screenOptions={{
        presentation: "modal",
        headerStyle: {
          backgroundColor: "#F7F5F2",
        },
        headerTintColor: "#5C5C5C",
      }}
    >
      <Stack.Screen
        name="settings"
        options={{
          title: "Settings",
          headerRight: () => (
            <Pressable onPress={router.back}>
              <Text className="font-semibold text-zinc-800 text-base">
                Done
              </Text>
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}
