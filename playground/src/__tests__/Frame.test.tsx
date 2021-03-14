import React from "react";
import { render } from "../../scripts/test-utils";

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
      <Frame
        id="thing"
        snippet={initialSnippet}
        transformJs={false}
        presets={[]}
      />
    );
    expect(getByText("error")).toBeDefined();
  });
});
