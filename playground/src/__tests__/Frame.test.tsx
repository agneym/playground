import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";

import Frame from "../Result/Frame";

jest.mock("../utils/constructSnippet", () => {
  return jest.fn().mockImplementation(() => {
    throw new Error("error");
  });
});

const initialSnippet = {
  markup: ``,
  css: ``,
  javascript: ``,
};

describe("Frame", () => {
  it("should render error", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Frame id="thing" snippet={initialSnippet} />
      </ThemeProvider>
    );
    expect(getByText("error")).toBeDefined();
  });
});
