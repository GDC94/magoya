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
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary[100]};
  border: 1px solid ${({ theme }) => theme.colors.dark[100]};
  border-radius: 10px;
  padding: 1rem;
`;

export const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BrandContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-items: center;
  margin-bottom: 20px;
  background-color: rgb(212 198 253);
  border: 1px solid ${({ theme }) => theme.colors.dark[100]};
  padding: 0.5rem;
  border-radius: 10px;
`;

export const BrandText = styled.div`
  font-family: "Anton", sans-serif;
  font-size: 4.6rem;
  line-height: 92%;
  letter-spacing: -2px;
`;

export const Title = styled.p`
  font-family: "Anton", sans-serif;
  font-size: 3rem;
  line-height: 92%;
  letter-spacing: -1px;
`;
