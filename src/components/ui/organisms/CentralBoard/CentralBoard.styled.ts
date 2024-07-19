import styled from "@emotion/styled";

import { FlexBasicConfig, FlexSpaceBetween } from "@/styles/themeParts/flex";

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
  width: 1200px;
  max-width: 95%;

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
  flex-direction: column;
`;

export const MiddleLeft = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 5px solid ${({ theme }) => theme.colors.dark[100]};
  ${FlexSpaceBetween}
`;

export const ButtonsRepositories = styled.div`
  width: 50%;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.dark[100]};
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 2rem;
`;

export const MagicButtonContent = styled.div`
  height: 100%;
  width: 50%;
`;

export const ButtonLink = styled.a`
  width: auto;
  max-width: 170px;
  min-width: 170px;
  background-color: ${({ theme }) => theme.colors.dark[100]};
  border: 2px solid;
  border-radius: ${({ theme }) => theme.size["3"]};
  cursor: "pointer";
  outline: none;
  display: inline-block;
  text-align: center;
  padding: ${(props) => props.theme.size["0.5"]} ${(props) => props.theme.size["1"]};
  transition: background-color 0.3s;
  transition: 1s;
  color: white;
  font-weight: 600;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white[100]};
    border-color: ${({ theme }) => theme.colors.dark[100]};
    color: ${({ theme }) => theme.colors.dark[100]};
  }
`;

export const MiddleRight = styled.div`
  height: 100%;
  width: 100%;
  padding: ${({ theme }) => theme.size["1"]};
  position: relative;
  background-color: #f3e281ba;
  border-bottom: 5px solid ${({ theme }) => theme.colors.dark[100]};
`;

export const Right = styled.div`
  width: 60%;
  height: 100%;
  ${FlexBasicConfig}
  flex-direction: column;
  background-color: white;
  border: 3px solid ${({ theme }) => theme.colors.dark[100]};
`;

export const HeaderForm = styled.div`
  padding: ${({ theme }) => theme.size["1"]};
  border-bottom: 5px solid ${({ theme }) => theme.colors.quaternary[100]};
  background-color: black;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.size["3.125"]};
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.white[100]};
  text-align: flex-start;
  line-height: 98%;
  letter-spacing: -3.2px;
`;

export const Brand = styled.span`
  font-size: ${({ theme }) => theme.size["3.25"]};
  font-weight: bolder;
  color: hsl(359.13deg 83.13% 67.45%);
  text-align: flex-start;
  line-height: 98%;
  letter-spacing: -3.2px;
`;
