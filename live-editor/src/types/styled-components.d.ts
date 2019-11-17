import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    error: {
      background: string;
      color: string;
    };
    tabs: {
      tabHeader: {
        borderBottom: string;
      };
    };
  }
}
