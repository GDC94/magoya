import styled from "@emotion/styled";

import { FlexBasicConfig, FlexSpaceBetween } from "@/styles/themeParts/flex";
import { QUERIES } from "@/styles";

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

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
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

  @media ${QUERIES.tabletAndSmaller} {
    width: 95%;
    border-bottom: 3px solid ${({ theme }) => theme.colors.dark[100]};
  }
`;

export const MiddleLeft = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 5px solid ${({ theme }) => theme.colors.dark[100]};
  ${FlexSpaceBetween}
  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
  }
`;

export const ButtonsRepositories = styled.div`
  width: 50%;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.dark[100]};
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  padding: ${({ theme }) => theme.size["1"]};
  gap: ${({ theme }) => theme.size["0.25"]};

  @media ${QUERIES.tabletAndSmaller} {
    width: 100%;
    border-right: 0px;
    padding-bottom: 0px;
  }
`;

export const MagicButtonContent = styled.div`
  height: 100%;
  width: 50%;
  ${FlexBasicConfig}
  @media ${QUERIES.tabletAndSmaller} {
    width: 100%;
    justify-content: flex-end;
  }
`;

export const ButtonLink = styled.a`
  width: auto;
  transition: background-color 0.3s;
  transition: 1s;
  ${FlexBasicConfig}
  gap: 10px;

  color: ${({ theme }) => theme.colors.dark[100]};
  font-weight: 600;
  cursor: pointer;
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
  background-color: ${({ theme }) => theme.colors.white[100]};
  border: 3px solid ${({ theme }) => theme.colors.dark[100]};

  @media ${QUERIES.tabletAndSmaller} {
    width: 95%;
  }
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

  @media ${QUERIES.tabletAndSmaller} {
    text-align: center;
    max-width: 90%;
    margin: 0 auto;
  }
`;

export const Brand = styled.span`
  font-size: ${({ theme }) => theme.size["3.25"]};
  font-weight: bolder;
  color: hsl(359.13deg 83.13% 67.45%);
  text-align: flex-start;
  line-height: 98%;
  letter-spacing: -3.2px;
`;
