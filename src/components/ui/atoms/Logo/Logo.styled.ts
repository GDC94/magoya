import styled from "@emotion/styled";

import { QUERIES } from "@/styles";

export const LogoContainer = styled.div`
  padding-right: 0.5rem;
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;
