import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100dvh;
  height: 100vh;

  @media print {
    width: 100%;
    min-width: 100%;
  }
`;

export const LayoutWrapper = styled.div`
  width: 100%;
  z-index: 2;
`;
