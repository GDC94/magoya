import styled from "@emotion/styled";

import { FlexSpaceBetween } from "@/styles/themeParts/flex";

export const LogoContainer = styled.div`
  padding: 0.5rem;
  ${FlexSpaceBetween}
  gap: 0.5rem;
`;

export const HeaderText = styled.h2`
  font-size: ${({ theme }) => theme.size["1.25"]};
  font-weight: 600;
  margin: 0;
`;
