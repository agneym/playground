import "styled-components";

import { theme } from "../utils/theme";

declare module "styled-components" {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}
