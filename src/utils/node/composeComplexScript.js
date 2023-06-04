import fs from "fs";
import { generate as generateRandomStr } from "randomstring";

import { execCommand, buildEnv } from "@utils";

export const composeComplexScript = ({ instruction, prefix, metadata }) => {
  const { alias } = metadata;

  return async (params = {}) => {
    const { scriptArgs = {} } = params;

    const { script } = await instruction(scriptArgs);

    const scriptContent = `#!/bin/bash
sudo apt -q update
${buildEnv}
${script}`;

    const scriptName = `${prefix}_${alias}_${generateRandomStr(7)}.sh`;
    fs.writeFileSync(`./${scriptName}`, scriptContent);
    await execCommand(`chmod +x ${scriptName}`);
    await execCommand(`bash ${scriptName}`);
    fs.unlinkSync(`./${scriptName}`);
  };
};
