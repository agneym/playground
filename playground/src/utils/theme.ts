import merge from "lodash.merge";

const lightModeColors = {
  container: {
    borderColor: "rgba(0, 0, 0, 0.3)",
  },
  error: {
    background: "#e74c3c",
    color: "#ffffff",
  },
  console: {
    background: "rgba(0, 0, 0, 1)",
  },
  divider: {
    background: "#202020",
  },
  editor: {
    backgroundColor: `#000000`,
    color: `#ffffff`,
  },
  tabs: {
    tabHeader: {
      background: "transparent",
      color: `#000000`,
      borderBottom: `0.1em solid rgba(0, 0, 0, 0.1)`,
    },
  },
};

const darkModeColors = {
  container: {
    borderColor: "rgba(255, 255, 255, 0.4)",
  },
  error: {
    background: "#e74c3c",
    color: "#ffffff",
  },
  console: {
    background: "rgba(0, 0, 0, 1)",
  },
  divider: {
    background: "rgba(255, 255, 255, 0.5)",
  },
  editor: {
    backgroundColor: `#000000`,
    color: `#ffffff`,
  },
  tabs: {
    tabHeader: {
      background: `rgba(1, 21, 21, 0.8)`,
      panelBackground: `rgb(1, 21, 21)`,
      color: `#ffffff`,
      borderBottom: `0.1em solid rgba(255, 255, 255, 0.4)`,
    },
    selectedTab: {
      borderBottom: "0.2em solid rgb(255, 255, 255)",
    },
  },
};

export const theme = {
  container: {
    borderColor: "",
    minHeight: "20em",
    minWidth: "15em",
  },
  error: {
    background: "",
    color: "",
  },
  console: {
    background: "rgba(0, 0, 0, 1)",
  },
  divider: {
    width: 2,
    background: "",
  },
  editor: {
    fontFamily: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
    backgroundColor: ``,
    color: ``,
  },
  tabs: {
    tabHeader: {
      borderBottom: "",
      panelBackground: "",
      background: "",
      color: "",
    },
    tabPanel: {
      phoneHeight: "10em",
    },
    selectedTab: {
      background: "",
      borderBottom: "0.2em solid rgb(0, 0, 0)",
    },
  },
};

export type ColorMode = "light" | "dark";

/**
 * Get corresponding theme.
 * @param mode color theme type
 */
export default function getTheme(mode: ColorMode = "light") {
  const colorTheme = mode === "light" ? lightModeColors : darkModeColors;
  return merge(theme, colorTheme);
}
