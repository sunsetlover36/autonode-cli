import chalk from "chalk";

import { type AskGptResponse } from "@gpt";
import { capitalize, createLoader, log } from "@utils";

import { projects } from "./projects";

const uninstallNode = async (node) => {
  const project = projects[node];
  const {
    scripts: { uninstall },
  } = project;
  try {
    await uninstall();
  } catch {
    const errorText = `Uninstall error for ${capitalize(node)}`;
    log(chalk.redBright(errorText));
    throw new Error(errorText);
  }
};

export const uninstallGpt = async (json: AskGptResponse) => {
  const { nodes } = json;

  await createLoader({
    loadingText: `Uninstalling ${nodes
      .map((node) => capitalize(node))
      .join(", ")}...`,
    fn: async () => {
      for (const node of nodes) {
        await uninstallNode(node.toLowerCase());
      }
    },
  });
};
