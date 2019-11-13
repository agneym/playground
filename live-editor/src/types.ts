export interface ISnippet {
  html: string;
  css: string;
  js: string;
}

export type IEditorTabs = "html" | "css" | "js";

export interface ITabConfig {
  name: string;
  value: IEditorTabs;
}
