import { DefaultTheme } from "styled-components";
import { merge } from "lodash-es";

const lightModeColors = {
  container: {
    borderColor: "rgba(0, 0, 0, 0.3)",
  }
}

const darkModeColors = {
  container: {
    borderColor: "#ffffff",
  }
}

export const theme = {
  container: {
    borderColor: "",
    minHeight: "20em",
    minWidth: "20em",
  },
  error: {
    background: "#e74c3c",
    color: "#ffffff",
  },
  console: {
    background: "rgba(0, 0, 0, 1)",
  },
  divider: {
    width: 2,
    background: "#202020",
  },
  editor: {
    fontFamily: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
    backgroundColor: `#000000`,
    color: `#ffffff`,
  },
  tabs: {
    tabHeader: {
      borderBottom: "0.1em solid rgba(0, 0, 0, 0.1)",
      background: `transparent`,
    },
    tabPanel: {
      phoneHeight: "10em",
    },
    selectedTab: {
      borderBottom: "0.1em solid rgb(0, 0, 0)",
    },
  },
};

export type ColorMode = "light" | "dark"

/**
 * Get corresponding theme.
 * @param mode color theme type
 */
export default function getTheme(mode: ColorMode = "light") {
  const colorTheme = mode === "light" ? lightModeColors : darkModeColors;
  return merge(theme, colorTheme);
}
