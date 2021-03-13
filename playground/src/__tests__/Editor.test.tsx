import React from "react";
import { render } from "../../scripts/test-utils";

import Editor from "../Editor";

const initialSnippet = {
  markup: ``,
  css: ``,
  javascript: ``,
};

describe("Editor", () => {
  it("should render the default tab as per prop", () => {
    const defaultTab = "css";
    const { getByText } = render(
      <Editor
        width={40}
        code={initialSnippet}
        defaultTab={defaultTab}
        onChange={() => {}}
      />
    );
    const button = getByText("CSS");
    expect(button.getAttribute("data-selected")).toBe("");
  });
});
