import { useRef } from "react";

import {
  GridContainer,
  StyledArrowTop,
  StyledSvg,
  StyledTextPath,
  StyledMotionButton,
  StyledYellowCircle,
} from "./MagneticButton.styles";

function MagnetButton() {
  const ref = useRef<HTMLButtonElement | null>(null);

  return (
    <StyledMotionButton ref={ref}>
      <StyledArrowTop size={90} />

      <StyledYellowCircle />

      <StyledSvg
        height="200"
        width="200"
        animate={{ rotate: 360 }}
        initial={{ rotate: 0 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <path d="M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0" fill="none" id="circlePath" />
        <text>
          <StyledTextPath href="#circlePath" letterSpacing="2.8px">
            Repositorio-Repositorio-Repositorio-Repositorio
          </StyledTextPath>
        </text>
      </StyledSvg>
    </StyledMotionButton>
  );
}

function MagnetButtonExample() {
  return (
    <GridContainer>
      <MagnetButton />
    </GridContainer>
  );
}

export default MagnetButtonExample;