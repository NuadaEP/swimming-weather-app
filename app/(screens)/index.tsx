import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Link } from "expo-router";
import * as SQLite from "expo-sqlite";

import BaseTheme from "../../components/BaseTheme";
import BodyTheme from "../../components/BodyTheme";
import FooterTheme from "../../components/FooterTheme";

import * as Button from "../../components/Button";
import AnimatedArrowIcon from "../../components/AnimatedArrowIcon";

const data = [
  {
    id: "001",
    swam: "1400m swam",
    time: "in 45 minutes",
    pace: "pace 50m/58s",
    date: "at 17/10/2023",
  },
  {
    id: "002",
    swam: "1400m swam",
    time: "in 45 minutes",
    pace: "pace 50m/58s",
    date: "at 17/10/2023",
  },
  {
    id: "003",
    swam: "1400m swam",
    time: "in 45 minutes",
    pace: "pace 50m/58s",
    date: "at 17/10/2023",
  },
  {
    id: "004",
    swam: "1400m swam",
    time: "in 45 minutes",
    pace: "pace 50m/58s",
    date: "at 17/10/2023",
  },
  {
    id: "005",
    swam: "1400m swam",
    time: "in 45 minutes",
    pace: "pace 50m/58s",
    date: "at 17/10/2023",
  },
  {
    id: "006",
    swam: "1400m swam",
    time: "in 45 minutes",
    pace: "pace 50m/58s",
    date: "at 17/10/2023",
  },
  {
    id: "007",
    swam: "1400m swam",
    time: "in 45 minutes",
    pace: "pace 50m/58s",
    date: "at 17/10/2023",
  },
  {
    id: "008",
    swam: "1400m swam",
    time: "in 45 minutes",
    pace: "pace 50m/58s",
    date: "at 17/10/2023",
  },
  {
    id: "009",
    swam: "1400m swam",
    time: "in 45 minutes",
    pace: "pace 50m/58s",
    date: "at 17/10/2023",
  },
  {
    id: "010",
    swam: "1400m swam",
    time: "in 45 minutes",
    pace: "pace 50m/58s",
    date: "at 17/10/2023",
  },
  {
    id: "011",
    swam: "1400m swam",
    time: "in 45 minutes",
    pace: "pace 50m/58s",
    date: "at 17/10/2023",
  },
];

export default function ListActivities() {
  const [activities, setActivities] = useState<any[]>([]);
  const db = SQLite.openDatabase("swimming-weather.sb");

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS activities (id INTEGER PRIMARY KEY NOT NULL, distance TEXT, duration TEXT, calories TEXT, pool_size TEXT, av_time_working TEXT, av_resting_time TEXT, best_time TEXT, hardest_time TEXT, longer_break_time TEXT, av_speed TEXT, created_at DATE);",
        [],
        () => console.log("Connected"),
        (error) => {
          console.error(`ERROR: [${error}]`);
          return true;
        }
      );
    });

    db.transaction((tx) => {
      tx.executeSql(
        "SELECT distance, duration, av_speed, created_at FROM activities ORDER BY id DESC",
        undefined,
        (txObj, resultSet) => setActivities(resultSet.rows._array),
        (error) => {
          console.error(`QUERY ERROR: ${error}`);
          return false;
        }
      );
    });
  }, []);

  console.log(activities);

  return (
    <BaseTheme>
      <BodyTheme>
        <FlatList
          data={data}
          ItemSeparatorComponent={() => <View className="mt-4" />}
          ListEmptyComponent={() => <Text>No register to show here</Text>}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="flex-row justify-between items-center my-4 px-4">
              <View className="items-start">
                <Text className="font-semibold text-sm text-zinc-800">
                  {item.swam}
                </Text>
                <Text className="text-xs font-light text-zinc-500">
                  {item.time}
                </Text>
              </View>
              <View className="items-end">
                <Text className="font-semibold text-sm text-zinc-800">
                  {item.pace}
                </Text>
                <Text className="text-xs font-light text-zinc-500">
                  {item.date}
                </Text>
              </View>
            </View>
          )}
        />
      </BodyTheme>

      <FooterTheme>
        <Link href="/prepare" asChild>
          <Button.Root>
            <Button.Title text="Prepare" />
            <AnimatedArrowIcon />
          </Button.Root>
        </Link>
      </FooterTheme>
    </BaseTheme>
  );
}
