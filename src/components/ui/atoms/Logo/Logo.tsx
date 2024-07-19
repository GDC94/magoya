import * as React from "react";
import Image from "next/image";

import * as Styled from "./Logo.styled";
import { type LogoProps } from "./Logo.types";

function Logo({ width = 30, height = 30 }: LogoProps) {
  return (
    <Styled.LogoContainer>
      <Image src="/logo.svg" alt="Logo" width={width} height={height} priority />
    </Styled.LogoContainer>
  );
}

export default Logo;
