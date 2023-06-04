import { metadata } from "./metadata";

export const uninstallScript = () => {
  const {
    alias,
    folders: { git: gitFolder, project: projectFolder },
  } = metadata;

  return {
    script: `sudo systemctl stop ${alias} && sudo systemctl disable ${alias} && sudo rm /etc/systemd/system/${alias}.service && sudo systemctl daemon-reload && rm -rf $HOME/.${projectFolder} && rm -rf $HOME/${gitFolder} && sudo rm -rf $(which ${alias})`,
  };
};
