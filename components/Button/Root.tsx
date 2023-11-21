import React, {
  ComponentProps,
  createContext,
  forwardRef,
  useContext,
  useMemo,
} from "react";
import { Pressable, View } from "react-native";

type RootProps = {
  outlined?: boolean;
} & ComponentProps<typeof Pressable>;

const ButtonRootContext = createContext({} as Pick<RootProps, "outlined">);

export const Root = forwardRef(
  ({ outlined = false, ...props }: RootProps, ref: React.Ref<View>) => {
    const classes = useMemo(() => {
      const base =
        "flex-row items-center justify-center rounded-lg min-w-full min-h-0 p-4";

      if (outlined) {
        return base.concat(
          " border border-spacing-1 border-zinc-800 bg-app-isabeline"
        );
      }

      return base.concat(" bg-cyan-500");
    }, [outlined]);

    return (
      <ButtonRootContext.Provider
        value={{
          outlined,
        }}
      >
        <Pressable className={classes} {...props} ref={ref} />
      </ButtonRootContext.Provider>
    );
  }
);

export const useButtonRoot = () => useContext(ButtonRootContext);
