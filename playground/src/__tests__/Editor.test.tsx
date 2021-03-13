import React from "react";
import { render } from "@testing-library/react";

import Editor from "../Editor";
import getTheme from "../utils/theme";
import { ThemeProvider } from "../utils/ThemeProvider";

const initialSnippet = {
  markup: ``,
  css: ``,
  javascript: ``,
};

describe("Editor", () => {
  it("should render the default tab as per prop", () => {
    const defaultTab = "css";
    const { getByText } = render(
      <ThemeProvider userTheme={getTheme()} mode='light'>
        <Editor
          width={40}
          code={initialSnippet}
          defaultTab={defaultTab}
          onChange={() => {}}
        />
      </ThemeProvider>
    );
    const button = getByText("CSS");
    expect(button.getAttribute("data-selected")).toBe("");
  });
});
