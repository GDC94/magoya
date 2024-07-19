import styled from "@emotion/styled";

import { FlexBasicConfig, FlexSpaceBetween } from "@/styles/themeParts/flex";
import { QUERIES } from "@/styles";

export const WrapperAccounts = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.quaternary[100]};
  @media print {
    width: 100%;
    min-width: 100%;
  }
`;

export const AccountContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.quaternary[100]};
  width: 1000px;
  max-width: 95%;
  margin: 0 auto;
  ${FlexBasicConfig}

  @media print {
    width: 100%;
    min-width: 100%;
    height: auto;
  }
`;

export const AccountCentralBoard = styled.div`
  width: 100%;
  height: 70%;
  ${FlexSpaceBetween}

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
  }
`;

export const BalanceContainer = styled.div`
  width: 40%;
  height: 100%;
  ${FlexSpaceBetween};

  @media ${QUERIES.tabletAndSmaller} {
    width: 100%;
  }
`;

export const TransactionsContainer = styled.div`
  width: 60%;
  height: 100%;
  ${FlexSpaceBetween};

  @media ${QUERIES.tabletAndSmaller} {
    width: 100%;
  }
`;
