import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  container: {
    border: "0.1em solid rgba(0, 0, 0, 0.3)",
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
    },
    tabPanel: {
      phoneHeight: "10em",
    },
    selectedTab: {
      borderBottom: "0.1em solid rgb(0, 0, 0)",
    },
  },
};

export default theme;
