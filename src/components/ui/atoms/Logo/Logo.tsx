import * as React from "react";
import Image from "next/image";

import * as Styled from "./Logo.styled";

function Logo() {
  return (
    <Styled.LogoContainer>
      <Image src="/logo.svg" alt="Logo" width={30} height={30} priority />
      <Styled.HeaderText>MagoyApp</Styled.HeaderText>
    </Styled.LogoContainer>
  );
}

export default Logo;
