import React, { ComponentProps } from "react";
import { Pressable, View } from "react-native";
import { Link } from "expo-router";

type RootProps = {
  href: any;
} & ComponentProps<typeof View>;

export function Root({ href, ...props }: RootProps) {
  return (
    <Link href={href} asChild>
      <Pressable
        className="flex-row items-center justify-center rounded-lg min-w-full min-h-0 p-4 bg-cyan-500 shadow-sm"
        {...props}
      />
    </Link>
  );
}
