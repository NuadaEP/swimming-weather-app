import React, {
  ComponentProps,
  createContext,
  useContext,
  useMemo,
} from "react";
import { Pressable, View } from "react-native";
import { Link } from "expo-router";

type RootProps = {
  href: any;
  outlined?: boolean;
} & ComponentProps<typeof View>;

const ButtonRootContext = createContext({} as Pick<RootProps, "outlined">);

export function Root({ href, outlined = false, ...props }: RootProps) {
  const classes = useMemo(() => {
    const base =
      "flex-row items-center justify-center rounded-lg min-w-full min-h-0 p-4 shadow-sm";

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
      <Link href={href} asChild>
        <Pressable className={classes} {...props} />
      </Link>
    </ButtonRootContext.Provider>
  );
}

export const useButtonRoot = () => useContext(ButtonRootContext);
