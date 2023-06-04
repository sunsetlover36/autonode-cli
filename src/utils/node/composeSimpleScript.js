import { execCommand } from "@utils";

export const composeSimpleScript = ({ instruction }) => {
  return async () => {
    const { script } = await instruction();
    await execCommand(script);
  };
};
