import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    container: {
      border: string;
      minHeight: string;
    };
    error: {
      background: string;
      color: string;
    };
    console: {
      background: string;
    };
    tabs: {
      tabHeader: {
        borderBottom: string;
      };
      tabPanel: {
        phoneHeight: string;
      };
      selectedTab: {
        borderBottom: string;
      };
    };
  }
}
