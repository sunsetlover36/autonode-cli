import { composeCosmosInstallScript, composeSimpleScript } from "@utils";

import { installScript } from "./install";
import { metadata } from "./metadata";
import { uninstallScript } from "./uninstall";

export const babylon = {
  scripts: {
    install: composeCosmosInstallScript({
      instruction: installScript,
      metadata,
    }),
    uninstall: composeSimpleScript({ instruction: uninstallScript }),
  },
  ...metadata,
};