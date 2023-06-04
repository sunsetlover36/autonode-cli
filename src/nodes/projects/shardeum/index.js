import { composeComplexScript, composeSimpleScript } from "@utils";

import { installScript } from "./install";
import { uninstallScript } from "./uninstall";

export const shardeum = {
  scripts: {
    install: composeComplexScript({
      prefix: "install",
      instruction: installScript,
      metadata: { alias: "shardeum" },
    }),
    uninstall: composeSimpleScript({ instruction: uninstallScript }),
  },
};
