import React from "react";

import { MotiView } from "moti";
import { ChevronRight } from "lucide-react-native";

export default function AnimatedArrowIcon({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  return (
    <MotiView
      from={{
        translateX: -2,
      }}
      animate={{
        translateX: 6,
      }}
      transition={{
        loop: true,
        type: "timing",
        duration: 600,
        delay: 200,
      }}
    >
      <ChevronRight
        opacity={0.9}
        color={variant === "light" ? "white" : "rgb(63 63 70)"}
        strokeWidth={1}
        size={32}
      />
    </MotiView>
  );
}
