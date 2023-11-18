import React, { ComponentProps } from "react";

import { View } from "react-native";

type ValueProps = ComponentProps<typeof View>;

export function Value({ ...props }: ValueProps) {
  return <View className="flex-row items-center gap-1" {...props} />;
}
