import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { ArrowTop } from "../../commons/imagery";

export const GridContainer = styled.div`
  display: grid;
  padding: 3rem;
  place-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -2%);
  border-radius: 100%;
  border: 0.3px solid rgba(255, 255, 255, 0.2);
`;

export const StyledMotionButton = styled(motion.button)`
  background-color: hsl(257.81deg 86.49% 85.49%);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 220px;
  width: 220px;
  place-content: center;
  border: 2px solid black;
  border-radius: 50%;
  transition: background-color 200ms ease-out;

  cursor: pointer;

  &:hover {
    background-color: hsl(262.25deg 58.17% 70%);
    border: 4px dotted ${({ theme }) => theme.colors.dark[100]};
  }
`;

export const StyledArrowTop = styled(ArrowTop)`
  transform: rotate(45deg);
  position: relative;
  z-index: 10;
  font-size: 7rem;
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
  transform: translateX(-50%) translateY(-50%); /* Centra el texto dentro del círculo */
`;

export const StyledYellowCircle = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  transform-origin: center;
  transform: scale(0);
  border-radius: 50%;
  background-color: hsl(47.76deg 100% 50%); /* Ajusta el color de fondo */
  transition: transform 300ms ease-out;
`;
