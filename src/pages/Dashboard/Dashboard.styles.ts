import styled from "@emotion/styled";

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100dvh;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
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
  height: 35%;
  border: 1px solid ${({ theme }) => theme.colors.dark[100]};
  border-top: 0px;
  background-color: ${({ theme }) => theme.colors.secondary[200]};
`;
