import React from "react";
import { Stack } from "expo-router";

export { ErrorBoundary } from "expo-router";

export default function OptionsLayout() {
  return (
    <Stack
      initialRouteName="pool-size"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#F7F5F2",
        },
        headerTintColor: "#5C5C5C",
      }}
    >
      <Stack.Screen name="pool-size" options={{ title: "Pool Size" }} />
      <Stack.Screen name="time-to-work" options={{ title: "Time To Work" }} />
      <Stack.Screen name="time-to-rest" options={{ title: "Time To Rest" }} />
    </Stack>
  );
}
