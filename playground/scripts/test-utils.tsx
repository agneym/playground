import { createElement } from "react";
import type { FC, ReactElement, ReactNode } from "react";
import * as testingLibrary from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { setup } from "goober";

import { ThemeProvider, useTheme } from "../src/utils/ThemeProvider";
import getTheme from "../src/utils/theme";

setup(createElement, undefined, useTheme);

const AllProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider mode="light" userTheme={getTheme()}>
      {children}
    </ThemeProvider>
  );
};

function customRender(ui: ReactElement, options?: Omit<RenderOptions, "queries">) {
  return testingLibrary.render(ui, { wrapper: AllProviders, ...options });
}

export * from "@testing-library/react";

export { customRender as render };
