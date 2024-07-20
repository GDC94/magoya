import * as React from "react";

import Logo from "@/components/ui/atoms/Logo/Logo";

import * as Styled from "./Header.styled";

function Header() {
  return (
    <Styled.HeaderContainer>
      <Logo />
    </Styled.HeaderContainer>
  );
}

export default Header;
