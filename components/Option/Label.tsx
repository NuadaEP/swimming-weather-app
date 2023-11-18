import React, { ComponentProps } from "react";

import { View } from "react-native";

type LabelProps = ComponentProps<typeof View>;

export function Label({ ...props }: LabelProps) {
  return <View className="flex-row items-center gap-4" {...props} />;
}
