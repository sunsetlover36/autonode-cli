import chalk from "chalk";

import { type AskGptResponse } from "@gpt";
import { capitalize, createLoader, log } from "@utils";

import { projects } from "./projects";

const installNode = async (node) => {
  const project = projects[node];
  const {
    scripts: { install },
  } = project;

  try {
    await install();
  } catch (e) {
    const errorText = `Install error for ${capitalize(node)}`;
    log(chalk.redBright(errorText));
    throw new Error(errorText);
  }
};

export const installGpt = async (json: AskGptResponse) => {
  const { nodes } = json;

  await createLoader({
    loadingText: `Installing ${nodes
      .map((node) => capitalize(node))
      .join(", ")}...`,
    fn: async () => {
      for (const node of nodes) {
        await installNode(node.toLowerCase());
      }
    },
  });
};
