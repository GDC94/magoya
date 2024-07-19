import * as React from "react";
import Link from "next/link";

import Logo from "@/components/ui/atoms/Logo/Logo";

import * as Styled from "./Header.styled";

function Header() {
  return (
    <Styled.HeaderContainer>
      <Logo />
      <Link href="/AccountPage">Account</Link>
    </Styled.HeaderContainer>
  );
}

export default Header;
