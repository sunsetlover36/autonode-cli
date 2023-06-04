import { createWallet, setCosmosPorts, composeComplexScript } from "@utils";

export const composeInstallScript = ({ instruction, metadata }) => {
  const fn = composeComplexScript({ instruction, prefix: "install", metadata });
  return async () => {
    const { script: customPortsScript, ports } = await setCosmosPorts(metadata);

    await fn({
      scriptArgs: {
        customPorts: {
          script: customPortsScript,
          ports,
        },
      },
    });

    await createWallet({
      metadata,
      name: "wallet",
    });
  };
};
