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
    tabs: {
      tabHeader: {
        borderBottom: string;
      };
      selectedTab: {
        borderBottom: string;
      };
    };
  }
}
