import React from "react";
import { render } from "../../scripts/test-utils";

import Editor from "../Editor";

const emptySnippet = {
  markup: `<div id=app />`,
  css: ``,
  javascript: `import htm from 'htm'`,
};

const snippet = {
  markup: `<div id=app />`,
  css: `div {color: red;}`,
  javascript: `import { h, Component, render } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

const app = html\`<div>Hello World from Playground!</div>\`

render(app, document.getElementById('app'));
  `,
};

describe("Editor", () => {
  it("should render the default tab as per prop", () => {
    const defaultTab = "css";
    const { getByText } = render(
      <Editor
        width={40}
        code={snippet}
        defaultTab={defaultTab}
        onChange={() => {}}
      />
    );
    const button = getByText("CSS");
    expect(button.getAttribute("data-selected")).toBe("");
  });

  it("should render only the tabs that provided code", () => {
    const defaultTab = "markup";
    const { getByText, queryByText } = render(
      <Editor
        width={40}
        code={emptySnippet}
        defaultTab={defaultTab}
        onChange={() => {}}
      />
    );

    const htmlTab = getByText("HTML");
    const javascriptTab = getByText("JS");

    expect(htmlTab).toBeTruthy();
    expect(javascriptTab).toBeTruthy();

    const cssTab = queryByText("CSS");
    expect(cssTab).toBeFalsy();
  });
});
