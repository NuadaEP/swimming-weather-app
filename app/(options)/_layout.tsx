import React from "react";
import { Stack } from "expo-router";

export { ErrorBoundary } from "expo-router";

export default function OptionsLayout() {
  return (
    <Stack
      screenOptions={{
        title: "",
        headerShown: false,
      }}
    >
      <Stack.Screen name="pool-size" />
      <Stack.Screen name="time-to-work" />
      <Stack.Screen name="time-to-rest" />
    </Stack>
  );
}
