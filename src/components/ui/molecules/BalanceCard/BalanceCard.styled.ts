import styled from "@emotion/styled";

import { FlexBasicConfigColumn, FlexSpaceBetween } from "@/styles/themeParts/flex";

export const BalanceCardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white[100]};
  height: 100%;
  width: 100%;
  ${FlexSpaceBetween}
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: ${({ theme }) => theme.size["1"]};
  border: 2px solid ${({ theme }) => theme.colors.dark[100]};
`;

export const HeroTop = styled.div`
  width: 100%;
  background-color: #092826;
  height: auto;
  padding: ${({ theme }) => theme.size["1"]};
  border: 1px solid ${({ theme }) => theme.colors.dark[100]};
  ${FlexBasicConfigColumn}
`;

export const HeroBottom = styled.div`
  height: auto;
  width: 100%;
  padding: ${({ theme }) => theme.size["1"]};
  border: 1px solid ${({ theme }) => theme.colors.dark[100]};
  border-top: 0px;
`;

export const WelcomeMessage = styled.h3`
  font-size: ${({ theme }) => theme.size["2"]};
  color: ${({ theme }) => theme.colors.white[100]};
  font-weight: bold;
  letter-spacing: -2px;
`;

export const WelcomeSubMessage = styled.p`
  font-size: ${({ theme }) => theme.size["1.25"]};
  color: #00de67;
  font-weight: bold;
  letter-spacing: -1px;
`;

export const BalanceTitle = styled.h2`
  font-size: ${(props) => props.theme.size["2"]};
  color: ${({ theme }) => theme.colors.dark[100]};
  font-weight: 600;
  letter-spacing: -2px;
`;
