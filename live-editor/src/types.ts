export interface ISnippet {
  markup: string;
  css: string;
  javascript: string;
}

export type IEditorTabs = "markup" | "css" | "javascript";

export interface ITabConfig {
  name: string;
  value: IEditorTabs;
}
