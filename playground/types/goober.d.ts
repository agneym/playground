import "goober";

import { theme } from "../src/utils/theme";

declare module "goober" {
  type OurTheme = typeof theme;
  export interface DefaultTheme extends OurTheme {}
}
