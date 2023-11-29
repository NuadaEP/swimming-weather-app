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

import BaseTheme from "../../components/BaseTheme";
import BodyTheme from "../../components/BodyTheme";
import FooterTheme from "../../components/FooterTheme";

import * as Button from "../../components/Button";

let refInterval: NodeJS.Timeout | null = null;

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

  useEffect(() => {
    if (countdown <= 5) {
      animationView.animateTo({ scale: 1.2 });
      animationText.transitionTo("final");
    }

    if (countdown === 0) {
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
      animationView.animateTo({ scale: 1 });
      animationText.transitionTo("from");
      setCountdown((current) => current + 10);
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
