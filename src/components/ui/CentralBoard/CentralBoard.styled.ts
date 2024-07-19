import styled from "@emotion/styled";

import { FlexSpaceBetween } from "@/styles/themeParts/flex";

export const CentralBoardContainer = styled.div`
  width: 80%;
  height: 70%;
  background-color: transparent;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${FlexSpaceBetween}
  gap: 1rem;

  @media screen and (max-width: 320px) {
    max-width: 95%;
  }
`;

export const Left = styled.div`
  width: 40%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary[100]};
  border: 3px solid ${({ theme }) => theme.colors.dark[100]};
  border-bottom: 7px solid ${({ theme }) => theme.colors.dark[100]};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const MiddleLeft = styled.div`
  width: 45%;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.dark[100]};
  background-color: hsl(342.22deg 93.1% 88.63% / 90%);
  border-bottom: 5px solid ${({ theme }) => theme.colors.dark[100]};
`;

export const MiddleRight = styled.div`
  height: 100%;
  width: 55%;
  padding: ${({ theme }) => theme.size["1"]};
  position: relative;
  background-color: #f3e281ba;
  border-bottom: 5px solid ${({ theme }) => theme.colors.dark[100]};
`;

export const Right = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 3px solid ${({ theme }) => theme.colors.dark[100]};
`;
