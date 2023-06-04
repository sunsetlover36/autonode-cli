import chalk from "chalk";

export const createLoader = async ({
  loadingText,
  fn,
  resultText,
}: {
  loadingText: string;
  resultText?: string;
  fn: () => Promise<void>;
}) => {
  const loaderChars = ["/", "-", "\\", "|"];
  let currentCharIndex = 0;

  const interval = setInterval(() => {
    process.stdout.write(`\r\x1B[K✨ ${chalk.yellow(loadingText)} `);
    process.stdout.write(chalk.yellow(loaderChars[currentCharIndex]));
    currentCharIndex = (currentCharIndex + 1) % loaderChars.length;
  }, 150);

  try {
    await fn();
    process.stdout.write("\r\x1B[K");
    console.log(`✨ ${chalk.yellow(resultText || "Done!")}\n`);
  } catch {
    process.stdout.write("\r\x1B[K");
  } finally {
    clearInterval(interval);
  }
};
