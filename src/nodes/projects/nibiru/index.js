import { composeCosmosInstallScript, composeSimpleScript } from "@utils";

import { installScript } from "./install";
import { uninstallScript } from "./uninstall";
import { metadata } from "./metadata";

export const nibiru = {
  scripts: {
    install: composeCosmosInstallScript({
      instruction: installScript,
      metadata,
    }),
    uninstall: composeSimpleScript({ instruction: uninstallScript }),
  },
  ...metadata,
};
