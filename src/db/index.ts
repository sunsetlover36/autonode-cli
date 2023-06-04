// Remember to set type: module in package.json or use .mjs extension
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

import { type IDatabase } from "./types";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "db.json");

const adapter = new JSONFile<IDatabase>(file);
const defaultData: IDatabase = { isFirstLaunch: true };
const db = new Low<IDatabase>(adapter, defaultData);

export const getIsFirstLaunch = async () => {
  await db.read();
  return db.data.isFirstLaunch;
};

export const unsetIsFirstLaunch = async () => {
  db.data.isFirstLaunch = false;
  await db.write();
};
