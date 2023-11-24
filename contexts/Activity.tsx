import React, {
  ComponentProps,
  Fragment,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { useSettings } from "./Settings";
import { millisecondsToSeconds } from "../helpers/milliseconds-to-seconds";

export type StopwatchMapper = {
  activity: "Rest Time!" | "Work Time!";
  time: string;
  milliseconds: number;
};

type ActivityContextType = {
  distance: number;
  duration: number;
  calories: number;
  averageWorkTime: number;
  averageRestTime: number;
  bestWorkTime: number;
  hardestWorkTime: number;
  longerBreakTime: number;
  averageSpeed: number;
  handleActivity: (activities: StopwatchMapper[]) => void;
};

const ActivityContext = createContext({} as ActivityContextType);

export function Activity(props: ComponentProps<typeof Fragment>) {
  const [activityState, useActivityState] = useState<
    Omit<ActivityContextType, "handleActivity">
  >({
    distance: 0,
    duration: 0,
    calories: 0,
    averageWorkTime: 0,
    averageRestTime: 0,
    bestWorkTime: 0,
    hardestWorkTime: 0,
    longerBreakTime: 0,
    averageSpeed: 0,
  });

  const { poolSize } = useSettings();

  const handleActivity = useCallback((activities: StopwatchMapper[]) => {
    const init = {
      workLaps: 0,
      restLaps: 0,
      duration: 0,
      averageWorkTime: 0,
      averageRestTime: 0,
    };

    activities.forEach((data) => {
      const time = data.milliseconds;
      init.duration += time;

      if (data.activity === "Work Time!") {
        init.workLaps++;
        init.averageWorkTime += time;
      } else {
        init.restLaps++;
        init.averageRestTime += time;
      }
    });

    const workTime = activities.filter(
      ({ activity }) => activity === "Work Time!"
    );

    const [bestWorkTime] = workTime.sort(
      (current, next) =>
        Number(current.milliseconds) - Number(next.milliseconds)
    );
    const [hardestWorkTime] = workTime.sort(
      (current, next) =>
        Number(next.milliseconds) - Number(current.milliseconds)
    );

    const [longerBreakTime] = activities
      .filter(({ activity }) => activity === "Work Time!")
      .sort(
        (current, next) =>
          Number(next.milliseconds) - Number(current.milliseconds)
      );

    const [poolSizeNumber] = poolSize.split(" ");

    const distance = Number(poolSizeNumber) * init.workLaps * 2;

    const averageSpeed = distance / 60;

    const [minutes] = millisecondsToSeconds(init.duration, true).split(",");

    const calories = (600 / 60) * Number(minutes.replace(":", "."));

    useActivityState({
      averageRestTime: init.averageRestTime / init.workLaps,
      averageSpeed,
      averageWorkTime: init.averageWorkTime / init.restLaps,
      bestWorkTime: bestWorkTime.milliseconds,
      calories,
      distance,
      duration: init.duration,
      hardestWorkTime: hardestWorkTime.milliseconds,
      longerBreakTime: longerBreakTime.milliseconds,
    });
  }, []);

  return (
    <ActivityContext.Provider
      value={{
        ...activityState,
        handleActivity,
      }}
    >
      <Fragment {...props} />
    </ActivityContext.Provider>
  );
}

export const useActivity = () => useContext(ActivityContext);
