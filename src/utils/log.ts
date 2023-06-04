import chalk from "chalk";
import figlet from "figlet";

import { capitalize } from "./capitalize";
import { ProjectNames } from "./projectNames";

export const logIntro = () => {
  console.log(
    `\n${chalk.cyanBright(
      figlet.textSync("RUBURI", {
        font: "Alligator",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 150,
        whitespaceBreak: true,
      })
    )}\n`
  );
  console.log(
    chalk.cyanBright.bold("👽 AutoNode CLI from https://t.me/ruburi with 💘")
  );
  console.log(
    `${chalk.cyanBright.bold(
      `👽 Available projects: ${Object.values(ProjectNames)
        .map((name) => capitalize(name))
        .join(", ")}`
    )}\n`
  );
};

export const log = (text: string) => {
  process.stdin.write(`\r\x1B[K👾 ${text}\n`);
};
