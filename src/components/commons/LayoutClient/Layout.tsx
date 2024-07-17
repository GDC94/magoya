import React from "react";
import { StyleSheetManager } from "styled-components";

import GlobalStyles from "../GlobalStyles";

import { LayoutContainer, LayoutWrapper } from "./Layout.styles";

export interface LayoutProps {
  children?: React.ReactNode;
  full?: boolean;
}

export function Layout({ children, full }: LayoutProps) {
  return (
    <LayoutContainer>
      <GlobalStyles />
      <LayoutWrapper>
        <StyleSheetManager>
          {children}
          {!full && <h2>footer</h2>}
        </StyleSheetManager>
      </LayoutWrapper>
    </LayoutContainer>
  );
}
