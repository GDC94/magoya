import * as React from "react";

import * as Styled from "./BalanceCard.styled";

function BalanceCard() {
  return (
    <Styled.BalanceCardContainer>
      <Styled.HeroTop>
        <Styled.WelcomeMessage>Hola 👋</Styled.WelcomeMessage>
        <Styled.WelcomeSubMessage> Que bueno volver a verte!</Styled.WelcomeSubMessage>
      </Styled.HeroTop>
      <Styled.HeroBottom>
        <h1>bienvenidos</h1>
      </Styled.HeroBottom>
    </Styled.BalanceCardContainer>
  );
}

export default BalanceCard;
