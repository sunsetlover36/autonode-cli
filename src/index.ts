import promptSync from "prompt-sync";
import chalk from "chalk";

import { buildEssentials, checkFlag, createLoader, ProjectNames } from "@utils";
import { getIsFirstLaunch, unsetIsFirstLaunch } from "@db";
import { askGpt, GptAction } from "@gpt";
import { installGpt, uninstallGpt } from "@nodes";

import { logIntro } from "./utils/log";

const prompt = promptSync();

const askFlow = async () => {
  const text = prompt(chalk.cyanBright.bold("> "));
  const json = await askGpt({
    instruction: text,
    nodes: Object.values(ProjectNames),
  });

  const { action } = json;
  switch (action) {
    case GptAction.INSTALL_NODE:
      await installGpt(json);
      break;
    case GptAction.UNINSTALL_NODE:
      await uninstallGpt(json);
      break;
    default:
      console.log(`👾 ${chalk.redBright("Unknown action.")}`);
      break;
  }

  await askFlow();
};

const handleFirstLaunch = async () => {
  await createLoader({
    loadingText: "First launch! Installing essentials...",
    resultText: "Installed essentials successfully!",
    fn: buildEssentials,
  });
  await unsetIsFirstLaunch();
};

const start = async () => {
  logIntro();

  const isFirstLaunch = await getIsFirstLaunch();

  if (isFirstLaunch && !checkFlag(process.env.DISABLE_BUILD_ESSENTIALS)) {
    await handleFirstLaunch();
  }

  await askFlow();
};

start();
