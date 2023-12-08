import * as SQLite from "expo-sqlite";

import { SQLiteConnect } from "./sqlite-connect";
import { Database } from "../db.interface";

export class ActivityTable
  extends SQLiteConnect
  implements Database<SQLite.SQLiteDatabase>
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
        () => console.log("Connected"),
        (error) => {
          console.error(`ERROR: [${error}]`);
          return true;
        }
      );
    });
  }

  public async insert<Paramenter>(data: Paramenter): Promise<boolean> {
    let response = true;
    this.connection.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO activities (id, distance, duration, calories, pool_size, av_time_working, av_resting_time, best_time, hardest_time, longer_break_time, av_speed, created_at) values (${data.join(
          ", "
        )});`,
        [],
        () => {
          response = false;
          return true;
        }
      );
    });

    return response;
  }

  public async selectAll<Response>(): Promise<Response[]> {
    const registers: Response[] = [];

    this.connection.transaction((tx) => {
      tx.executeSql(
        "SELECT distance, duration, av_speed, created_at FROM activities ORDER BY id DESC",
        undefined,
        (_, resultSet) => registers.push(resultSet.rows._array as Response)
      );
    });

    return registers;
  }

  public async selectOne<Response>(id: number): Promise<Response> {
    let register;

    this.connection.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM activities WHERE id = ${id}`,
        undefined,
        (_, resultSet) => {
          register = resultSet.rows._array as Response;
        }
      );
    });

    return register as Response;
  }
}
