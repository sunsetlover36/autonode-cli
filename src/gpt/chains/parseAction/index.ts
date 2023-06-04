import { OpenAI } from 'langchain/llms/openai'
import { LLMChain } from 'langchain/chains'

import { template } from './template'

export const getParseActionChain = (model: OpenAI) =>
  new LLMChain({
    llm: model,
    prompt: template,
  })
