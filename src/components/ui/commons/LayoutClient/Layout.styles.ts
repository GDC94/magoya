import styled from "@emotion/styled";

import { QUERIES } from "@/styles";

export const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100dvh;
  height: 100vh;

  @media print {
    width: 100%;
    min-width: 100%;
  }
  @media ${QUERIES.tabletAndSmaller} {
    height: 110vh;
  }
`;

export const LayoutWrapper = styled.div`
  width: 100%;
  z-index: 2;
`;
