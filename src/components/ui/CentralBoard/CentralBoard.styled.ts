import styled from "@emotion/styled";

export const CentralBoardContainer = styled.div`
  width: 80%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.secondary[100]};
  border: 1px solid ${({ theme }) => theme.colors.dark[100]};
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 320px) {
    max-width: 95%;
  }
`;
