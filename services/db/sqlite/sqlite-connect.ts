import * as SQLite from "expo-sqlite";
import { Connect } from "../db.interface";

export class SQLiteConnect implements Connect<SQLite.SQLiteDatabase> {
  public connection: SQLite.SQLiteDatabase;

  constructor() {
    this.connection = SQLite.openDatabase("swimming-weather.db");
  }
}
