import { OpenAI } from "langchain/llms/openai";

import { type AskGptParams, type AskGptResponse, GptAction } from "./types";
import { callChain } from "./utils";
import { getChains } from "./chains";

const model = new OpenAI({
  temperature: 0,
});
const chains = getChains(model);

export const askGpt = async (params: AskGptParams): Promise<AskGptResponse> => {
  const { instruction, nodes: nodesList } = params;
  const { action, nodes } = await callChain<AskGptResponse>(
    chains.parseAction,
    {
      instruction,
    }
  );

  if (action === GptAction.UNCLEAR_INSTRUCTION) {
    return { action };
  }

  const isValidNodesList = nodes.every((node) =>
    nodesList.includes(node.toLowerCase())
  );

  if (!isValidNodesList) {
    return { action: GptAction.UNCLEAR_INSTRUCTION };
  }

  return {
    action,
    nodes,
  };
};

export { type AskGptResponse, GptAction } from "./types";
