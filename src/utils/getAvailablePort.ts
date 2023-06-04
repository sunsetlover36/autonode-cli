import { execCommand } from "./execCommand";

export const getAvailablePort = async (
  port: number,
  addendum?: number
): Promise<number> => {
  try {
    const result = await execCommand(`sudo lsof -i:${port}`);
    if (result) {
      return await getAvailablePort(port + (addendum || 1));
    }
  } catch {
    return port;
  }
};
