import "goober";

import { theme } from "../utils/theme";

declare module "goober" {
  type OurTheme = typeof theme;
  export interface DefaultTheme extends OurTheme {}
}
