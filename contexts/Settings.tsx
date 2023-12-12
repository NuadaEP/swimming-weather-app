import React, {
  ComponentProps,
  Fragment,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

type SettingLabels = "poolSize" | "timeToWork" | "timeToRest";

type SettingsContextType = {
  poolSize: string;
  timeToWork: string;
  timeToRest: string;
  onSelect: (label: SettingLabels, value: string) => void;
};

const SettingContext = createContext({} as SettingsContextType);

export function Settings(props: ComponentProps<typeof Fragment>) {
  const [poolSize, setPoolSize] = useState("25 meters");
  const [timeToWork, setTimeToWork] = useState("30 seconds");
  const [timeToRest, setTimeToRest] = useState("20 seconds");

  const onSelect = useCallback((label: SettingLabels, value: string) => {
    switch (label) {
      case "poolSize":
        setPoolSize(value);
        break;

      case "timeToWork":
        setTimeToWork(value);
        break;

      default:
        setTimeToRest(value);

        break;
    }
  }, []);

  return (
    <SettingContext.Provider
      value={{
        onSelect,
        poolSize,
        timeToRest,
        timeToWork,
      }}
    >
      <Fragment {...props} />
    </SettingContext.Provider>
  );
}

export const useSettings = () => useContext(SettingContext);
