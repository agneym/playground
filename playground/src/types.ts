export interface ISnippet {
  markup: string;
  css: string;
  javascript: string;
}

export type IEditorTabs = "markup" | "css" | "javascript";
export type IResultTabs = "result" | "console";

export interface ITabConfig<T> {
  code?: string;
  name: string;
  value: T;
}
