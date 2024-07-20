import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { Logo } from "@/components/ui/commons/imagery";
import { QUERIES } from "@/styles";

export const GridContainer = styled.div`
  display: grid;
  place-content: center;
  border-radius: 100%;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

export const StyledMotionButton = styled(motion.button)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 215px;
  width: 215px;
  place-content: center;
  border: 2px solid black;
  border-radius: 50%;
  transition: background-color 200ms ease-out;
  background-color: #d4c6fd;

  cursor: pointer;

  &:hover {
    background-color: rgb(191 164 255);
    border: 4px dotted ${({ theme }) => theme.colors.dark[100]};
  }
`;

export const StyledArrowTop = styled(Logo)`
  transform: rotate(45deg);
  position: relative;
  z-index: 10;
  font-size: 5rem;
  color: white;
  transition: transform 700ms ease-out;

  ${StyledMotionButton}:hover & {
    transform: rotate(-5deg);
  }
`;

export const StyledSvg = styled(motion.svg)`
  position: absolute;
  z-index: 10;
  transform: translate(-50%, -50%);
`;

export const StyledTextPath = styled.textPath`
  fill: black;
  font-size: 17px;
  font-weight: bold;
  text-transform: uppercase;
  transition: opacity 700ms ease-out;
  transform: translateX(-50%) translateY(-50%);
`;

export const StyledYellowCircle = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  transform-origin: center;
  transform: scale(0);
  border-radius: 50%;
  background-color: #a3f797;
  transition: transform 300ms ease-out;
`;
