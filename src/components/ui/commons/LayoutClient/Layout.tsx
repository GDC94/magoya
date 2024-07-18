"use client";
import React from "react";
import { StyleSheetManager } from "styled-components";

import GlobalStyles from "../GlobalStyles";

import { LayoutContainer, LayoutWrapper } from "./Layout.styles";

export interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <GlobalStyles />
      <LayoutWrapper>
        <StyleSheetManager>{children}</StyleSheetManager>
      </LayoutWrapper>
    </LayoutContainer>
  );
}
