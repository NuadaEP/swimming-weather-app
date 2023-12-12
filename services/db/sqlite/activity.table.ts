import * as SQLite from "expo-sqlite";

import { SQLiteConnect } from "./sqlite-connect";
import { Database } from "../db.interface";
import { Activity } from "../models";

export class ActivityTable
  extends SQLiteConnect
  implements Database<SQLite.SQLiteDatabase, Activity>
{
  constructor() {
    super();
    this.createTable();
  }

  private createTable(): void {
    this.connection.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS activities (id INTEGER PRIMARY KEY NOT NULL, distance TEXT, duration TEXT, calories TEXT, pool_size TEXT, av_time_working TEXT, av_resting_time TEXT, best_time TEXT, hardest_time TEXT, longer_break_time TEXT, av_speed TEXT, created_at DATE);",
        [],
        undefined,
        undefined
      );
    });
  }

  public async insert(data: Omit<Activity, "id">): Promise<boolean> {
    let response: boolean = true;

    const fields = Object.keys(data);
    const values = Object.values(data).map((v) => `"${v}"`);

    this.connection.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO activities (${fields.join(", ")}) values (${values.join(
          ", "
        )});`,
        undefined,
        undefined,
        () => {
          response = false;
          return false;
        }
      );
    });

    return response;
  }

  public async selectAll(): Promise<Activity[]> {
    const registers: Activity[] = [];

    this.connection.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM activities ORDER BY id DESC",
        undefined,
        (_, resultSet) => {
          registers.push(...resultSet.rows._array);
        }
      );
    });

    return registers;
  }

  public async selectOne(id: number): Promise<Activity | undefined> {
    let register: Activity | undefined;

    this.connection.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM activities WHERE id = '${id}'`,
        undefined,
        (_, resultSet) => {
          register = resultSet.rows._array[0];
        }
      );
    });

    return register;
  }
}
