import styled from "@emotion/styled";

import { FlexBasicConfig, FlexSpaceBetween } from "@/styles/themeParts/flex";
import { QUERIES, SIZES } from "@/styles";

import { ArrowTop } from "../../commons/imagery";

export const CentralBoardContainer = styled.div`
  width: 80%;
  height: 70%;
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
    transform: translate(-50%, -69%);
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
    border-bottom: 2px solid ${({ theme }) => theme.colors.dark[100]};
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
  background-image: url("/back.jpeg");
  background-size: cover;
  background-position: center;

  @media ${QUERIES.tabletAndSmaller} {
    width: 100%;
    border-right: 0px;
    padding-bottom: 1rem;
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
  ${FlexBasicConfig}
  gap: 10px;
  background-color: #ffc305;
  text-decoration: none;
  color: #092826;
  font-weight: 600;
  cursor: pointer;
  padding-right: 7px;
`;

export const MiddleRight = styled.div`
  height: 100%;
  width: 100%;
  padding: ${({ theme }) => theme.size["1"]};
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark[100]};
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
  border-bottom: 3px solid ${({ theme }) => theme.colors.dark[100]};
  background-color: #092826;
`;

export const Title = styled.p`
  font-size: clamp(${SIZES["2"]}, 1.6vw + ${SIZES["1.5"]}, ${SIZES["6"]});
  font-weight: bolder;
  color: #00de67;
  text-align: flex-start;
  line-height: 98%;
  letter-spacing: -3.2px;

  @media ${QUERIES.tabletAndSmaller} {
    text-align: center;
    max-width: 95%;
    margin: 0 auto;
  }
`;

export const Brand = styled.span`
  font-size: clamp(${SIZES["2"]}, 1.6vw + ${SIZES["1.5"]}, ${SIZES["6"]});
  font-weight: bolder;
  color: #ffc305;
  text-align: flex-start;
  line-height: 98%;
  letter-spacing: -3.2px;
`;

export const StyledArrow = styled(ArrowTop)`
  transform: rotate(45deg);
  position: relative;
  z-index: 10;
  font-size: 5rem;
  color: white;
  transition: transform 700ms ease-out;
`;
