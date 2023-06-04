import { LLMChain } from 'langchain/chains'

export const parseJSON = (text: string) => JSON.parse(text.replaceAll('\n', ''))

export const callChain = async <T>(
  chain: LLMChain<string>,
  args: any
): Promise<T> => {
  return parseJSON((await chain.call(args)).text)
}
