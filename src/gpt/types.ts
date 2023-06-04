export interface AskGptParams {
  instruction: string;
  nodes: string[];
}

export interface AskGptResponse {
  action: GptAction;
  nodes?: string[];
}

export enum GptAction {
  INSTALL_NODE = "INSTALL_NODE",
  UNINSTALL_NODE = "UNINSTALL_NODE",
  UNCLEAR_INSTRUCTION = "UNCLEAR_INSTRUCTION",
}
