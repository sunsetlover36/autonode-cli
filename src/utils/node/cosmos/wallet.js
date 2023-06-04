import chalk from "chalk";

import { execCommand, log } from "@utils";

export const createWallet = async ({ metadata, name }) => {
  const { alias, name: projectName } = metadata;

  const { stderr } = await execCommand(`${alias} keys add ${name}`);
  const splittedStderr = stderr.split("\n");

  log(
    chalk.cyanBright(
      `Save your wallet mnemonics for ${projectName}: ${chalk.magenta.bold(
        splittedStderr[5]
      )}`
    )
  );
};
