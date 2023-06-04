import { OpenAI } from "langchain/llms/openai";
import { getParseActionChain } from "./parseAction";

export const getChains = (model: OpenAI) => ({
  parseAction: getParseActionChain(model),
});
