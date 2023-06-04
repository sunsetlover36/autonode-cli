import { exec, ExecException } from "child_process";

export const execCommand = (
  command: string
): Promise<{ stdout: string; stderr: string }> => {
  return new Promise((resolve, reject) => {
    exec(
      command,
      (error: ExecException | null, stdout: string, stderr: string) => {
        if (error) {
          reject(error);
          return;
        }
        resolve({ stdout, stderr });
      }
    );
  });
};
