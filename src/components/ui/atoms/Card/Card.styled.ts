import styled from "@emotion/styled";

import { FlexBasicConfigColumn, FlexStartConfig } from "@/styles/themeParts/flex";

export const CardContainer = styled.div`
  width: 100%;
  margin-top: ${(props) => props.theme.size["1.25"]};
`;

export const Top = styled.div`
  ${FlexBasicConfigColumn}
  gap: ${(props) => props.theme.size["0.5"]};
`;

export const NameContainer = styled.div`
  ${FlexBasicConfigColumn}
`;

export const AccountContainer = styled.div`
  margin-bottom: ${(props) => props.theme.size["1"]};
`;

export const BalanceContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.dark[100]};
  background-color: #00de67;
  padding: ${(props) => props.theme.size["0.5"]};
`;

export const BalanceDetail = styled.div`
  ${FlexStartConfig}
  align-items: baseline;
  gap: ${(props) => props.theme.size["0.25"]};
`;

export const Title = styled.p`
  font-size: ${(props) => props.theme.size["1.25"]};
  color: ${({ theme }) => theme.colors.dark[100]};
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 120%;
`;

export const Dollar = styled(Title)`
  font-size: ${(props) => props.theme.size["2.75"]};
`;

export const Amount = styled(Title)`
  font-size: ${(props) => props.theme.size["2.75"]};
`;

export const Subtitle = styled.p`
  font-size: ${(props) => props.theme.size["1"]};
  color: darkgrey;
  font-weight: 500;
`;
