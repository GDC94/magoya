import styled from "@emotion/styled";

import { QUERIES } from "@/styles";

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100vh;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media ${QUERIES.tabletAndSmaller} {
    height: 120vh;
    height: 120dvh;
  }
`;

export const ContainerTop = styled.div`
  height: 65%;
  border: 1px solid
    ${({ theme }) => theme.colors.dark[100]};
`;

export const ContainerBottom = styled.div`
  min-height: 35%;
  height: 35%;
  border: 1px solid
    ${({ theme }) => theme.colors.dark[100]};
  border-top: 0px;
  background-color: ${({ theme }) =>
    theme.colors.white[100]};
  @media ${QUERIES.tabletAndSmaller} {
    height: 100%;
  }
`;
