import React, { createElement, FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { setup } from "goober";

import { ThemeProvider, useTheme } from "../src/utils/ThemeProvider";
import getTheme from "../src/utils/theme";

setup(createElement, undefined, useTheme);

const AllProviders: FC = ({ children }) => {
  return (
    <ThemeProvider mode="light" userTheme={getTheme()}>
      {children}
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
