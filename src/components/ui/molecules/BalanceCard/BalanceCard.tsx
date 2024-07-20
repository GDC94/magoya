import * as React from "react";

import { Card } from "@/components/ui/atoms/Card";

import * as Styled from "./BalanceCard.styled";

function BalanceCard() {
  return (
    <Styled.BalanceCardContainer>
      <Styled.HeroTop>
        <Styled.WelcomeMessage>Hola 👋</Styled.WelcomeMessage>
        <Styled.WelcomeSubMessage>¡Que bueno volver a verte!</Styled.WelcomeSubMessage>
      </Styled.HeroTop>
      <Styled.HeroBottom>
        <Styled.BalanceTitle>Tu información</Styled.BalanceTitle>
        <Card />
      </Styled.HeroBottom>
    </Styled.BalanceCardContainer>
  );
}

export default BalanceCard;
