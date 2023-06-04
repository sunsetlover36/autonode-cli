import { PromptTemplate } from 'langchain/prompts'

import { prompt } from './prompt'

export const template = new PromptTemplate({
  template: prompt,
  inputVariables: ['instruction'],
})
