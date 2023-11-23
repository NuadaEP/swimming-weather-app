import React, {
  ComponentProps,
  Fragment,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { useSettings } from "./Settings";

export type StopwatchMapper = {
  activity: "Rest Time!" | "Work Time!";
  time: string;
};

type ActivityContextType = {
  //   activities: StopwatchMapper[];
  distance: number;
  duration: number;
  calories: number;
  averageWorkTime: number;
  averageRestTime: number;
  bestWorkTime: number;
  hardestWorkTime: number;
  longerBreakTime: number;
  averageSpeed: number;
  handleActivity: () => void;
};

const ActivityContext = createContext({} as ActivityContextType);

export function Activity(props: ComponentProps<typeof Fragment>) {
  const [activityState, useActivityState] =
    useState<Omit<ActivityContextType, "handleActivity">>();

  const { poolSize } = useSettings();

  const handleActivity = useCallback((activities: StopwatchMapper[]) => {
    const init = {
      workLaps: 0,
      duration: 0,
      averageWorkTime: 0,
      averageRestTime: 0,
    };

    activities.forEach((data) => {
      init.duration = +Number(data.time);

      if (data.activity === "Work Time!") {
        init.workLaps = +1;
        init.averageWorkTime = +Number(data.time);
      } else {
        init.averageRestTime = +Number(data.time);
      }
    });

    const workTime = activities.filter(
      ({ activity }) => activity === "Work Time!"
    );

    const bestWorkTime = workTime.sort(
      (current, next) => Number(current.time) - Number(next.time)
    );
    const hardestWorkTime = workTime.sort(
      (current, next) => Number(next.time) - Number(current.time)
    );

    const longerBreakTime = activities
      .filter(({ activity }) => activity === "Work Time!")
      .sort((current, next) => Number(next.time) - Number(current.time));

    const [poolSizeNumber] = poolSize.split(" ");

    const distance = Number(poolSizeNumber) * 2 * init.workLaps;

    const averageSpeed = distance / init.duration;

    const a = Object.assign(init, {
      bestWorkTime,
      hardestWorkTime,
      longerBreakTime,
      averageSpeed,
    });

    useActivityState(a);
  }, []);

  return (
    <ActivityContext.Provider value={}>
      <Fragment {...props} />
    </ActivityContext.Provider>
  );
}

export const useActivity = () => useContext(ActivityContext);
