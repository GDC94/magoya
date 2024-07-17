import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  height: 100dvh;
  height: 100vh;
  background-color: red;
  margin: 0 auto;
  @media screen and (max-width: 1440px) {
    max-width: 95%;
  }
  @media print {
    width: 100%;
    min-width: 100%;
  }
`;

export const LayoutWrapper = styled.div`
  width: 100%;
  z-index: 2;
`;
