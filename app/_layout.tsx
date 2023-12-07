import React, { useEffect } from "react";
import { BackHandler } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Settings } from "../contexts/Settings";
import { Activity } from "../contexts/Activity";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    const backHendler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );

    return () => backHendler.remove();
  }, []);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Settings>
      <Activity>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: "#F7F5F2",
            },
            headerTintColor: "#5C5C5C",
            gestureEnabled: false,
          }}
        >
          <Stack.Screen name="(screens)/index" options={{ title: "History" }} />

          <Stack.Screen
            name="(screens)/prepare"
            options={{ title: "Prepare to Swim" }}
          />
          <Stack.Screen
            name="(screens)/count-down"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(screens)/stopwatch"
            options={{ title: "Stopwatch", headerBackVisible: false }}
          />
          <Stack.Screen
            name="(screens)/overview"
            options={{ title: "Overview", headerBackVisible: false }}
          />
          <Stack.Screen name="[...missing]" options={{ title: "Oops!" }} />
          <Stack.Screen
            name="(options)"
            options={{ title: "", headerShown: false, presentation: "modal" }}
          />
          <Stack.Screen
            name="(modals)"
            options={{ title: "", presentation: "modal", headerShown: false }}
          />
        </Stack>
      </Activity>
    </Settings>
  );
}
