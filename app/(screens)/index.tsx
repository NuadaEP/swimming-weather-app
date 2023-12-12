import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

import BaseTheme from "../../components/BaseTheme";
import BodyTheme from "../../components/BodyTheme";
import FooterTheme from "../../components/FooterTheme";

import * as Button from "../../components/Button";
import AnimatedArrowIcon from "../../components/AnimatedArrowIcon";

import { makeActivityTable, Activity } from "../../services";

import { millisecondsToSeconds } from "../../helpers/milliseconds-to-seconds";

export default function ListActivities() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    makeActivityTable().selectAll().then(setActivities);
  }, []);

  const formatDate = useCallback((date: string) => {
    const createdAt = new Date(date);

    return `${createdAt.getDay()}/${createdAt.getMonth()}/${createdAt.getFullYear()}`;
  }, []);

  return (
    <BaseTheme>
      <BodyTheme>
        <FlatList
          data={activities}
          ItemSeparatorComponent={() => <View className="mt-4" />}
          ListEmptyComponent={() => <Text>No register to show here</Text>}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Link
              href={{
                pathname: "/details",
                params: { id: item.id },
              }}
              asChild
            >
              <Pressable className="flex-row justify-between items-center my-4 px-5">
                <View className="items-start gap-2">
                  <Text className="font-semibold text-sm text-zinc-800">
                    {item.distance} meters
                  </Text>
                  <Text className="text-xs font-light text-zinc-500">
                    {millisecondsToSeconds(Number(item.duration), true)} minutes
                  </Text>
                </View>
                <View className="items-end gap-2">
                  <Text className="font-semibold text-sm text-zinc-800">
                    {Number(item.calories).toFixed(2)} Kcal
                  </Text>
                  <Text className="text-xs font-light text-zinc-500">
                    {formatDate(String(item.created_at))}
                  </Text>
                </View>
              </Pressable>
            </Link>
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
