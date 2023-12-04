import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { router } from "expo-router";
import { Plus } from "lucide-react-native";
import {
  Text as MText,
  View as MView,
  useDynamicAnimation,
  useAnimationState,
} from "moti";
import { Audio } from "expo-av";
import * as Haptics from "expo-haptics";

import BaseTheme from "../../components/BaseTheme";
import BodyTheme from "../../components/BodyTheme";
import FooterTheme from "../../components/FooterTheme";

import * as Button from "../../components/Button";

import CountdownSound from "../../assets/sounds/countdown-sound.wav";

let refInterval: NodeJS.Timeout | null = null;
let countdownBeep: Audio.Sound | undefined;

export default function CountDown() {
  const [countdown, setCountdown] = useState(10);

  const animationView = useDynamicAnimation(() => ({ scale: 1 }));

  const animationText = useAnimationState({
    from: {
      color: "rgb(63,63,70)",
    },
    final: {
      color: "rgb(248,113,113)",
    },
  });

  const createSound = useCallback(async () => {
    if (countdownBeep) return countdownBeep;

    const { sound } = await Audio.Sound.createAsync(CountdownSound);

    countdownBeep = sound;

    return countdownBeep;
  }, []);

  useEffect(() => {
    if (countdown <= 5) {
      createSound().then((sound) => sound.playAsync());

      animationView.animateTo({ scale: 1.2 });
      animationText.transitionTo("final");

      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    }

    if (countdown === 0) {
      setTimeout(() => createSound().then((sound) => sound.stopAsync()), 500);
      setTimeout(() => {
        router.push("/(screens)/stopwatch");
      }, 1000);
    } else {
      clearInter();
    }
  }, [countdown]);

  const clearInter = useCallback(() => {
    if (refInterval) clearInterval(refInterval);

    const interval = setInterval(() => {
      setCountdown((current) => {
        if (current === 0) {
          clearInterval(interval);

          return current;
        }

        return current - 1;
      });
    }, 1000);

    refInterval = interval;
  }, []);

  const addTime = useCallback(() => {
    if (countdown < 60) {
      createSound().then((sound) => sound.stopAsync());
      animationView.animateTo({ scale: 1 });
      animationText.transitionTo("from");
      setCountdown((current) => current + 10);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
  }, [countdown]);

  return (
    <BaseTheme>
      <BodyTheme className="justify-center items-center">
        <View className="justify-center items-center">
          <MView state={animationView}>
            <MText
              className="text-8xl font-bold antialiased"
              state={animationText}
            >
              {countdown}
            </MText>
          </MView>

          <Text className="text-sm font-normal antialiased text-zinc-600">
            the activity going to start in
          </Text>
        </View>
      </BodyTheme>
      <FooterTheme>
        <Button.Root onPress={addTime} outlined>
          <Button.Title text="Add 10 seconds" />
          <Plus color="rgb(39 39 42)" className="w-4 h-4" />
        </Button.Root>
      </FooterTheme>
    </BaseTheme>
  );
}
