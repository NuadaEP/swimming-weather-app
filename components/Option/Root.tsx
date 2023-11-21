import React, { ComponentProps, forwardRef } from "react";

import { Pressable, View } from "react-native";

type RootProps = ComponentProps<typeof Pressable>;

export const Root = forwardRef(
  ({ ...props }: RootProps, ref: React.Ref<View>) => {
    return (
      <Pressable className="flex-row justify-between" {...props} ref={ref} />
    );
  }
);
