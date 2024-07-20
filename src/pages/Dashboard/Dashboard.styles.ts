import styled from "@emotion/styled";

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media print {
    width: 100%;
    min-width: 100%;
  }
`;

export const ContainerTop = styled.div`
  height: 65%;
  border: 1px solid ${({ theme }) => theme.colors.dark[100]};
`;

export const ContainerBottom = styled.div`
  min-height: 35%;
  height: 35%;
  border: 1px solid ${({ theme }) => theme.colors.dark[100]};
  border-top: 0px;
  background-color: ${({ theme }) => theme.colors.white[100]};
`;
