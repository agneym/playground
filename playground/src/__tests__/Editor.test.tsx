import React from "react";
import { render } from "@testing-library/react";
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
        code={initialSnippet}
        defaultTab={defaultTab}
        onChange={() => {}}
      />
    );
    const button = getByText(defaultTab);
    expect(button.getAttribute("data-selected")).toBe("");
  });
});
