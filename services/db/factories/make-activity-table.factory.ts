import { ActivityTable } from "../sqlite";

let instance: ActivityTable | undefined;

export function makeActivityTable() {
  if (!instance) instance = new ActivityTable();

  return instance;
}
