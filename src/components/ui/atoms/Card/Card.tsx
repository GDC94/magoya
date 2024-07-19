import * as React from "react";

import * as Styled from "./Card.styled";
import { type CardProps } from "./Card.types";

function Card({ name = "German Derbes", accountNumber = 1994, balance = 12560 }: CardProps) {
  return (
    <Styled.CardContainer>
      <Styled.Top>
        <Styled.NameContainer>
          <Styled.Title>Nombre:</Styled.Title>
          <Styled.Subtitle>{name}</Styled.Subtitle>
        </Styled.NameContainer>
        <Styled.AccountContainer>
          <Styled.Title>Número de cuenta:</Styled.Title>
          <Styled.Subtitle>{accountNumber}</Styled.Subtitle>
        </Styled.AccountContainer>
      </Styled.Top>
      <Styled.BalanceContainer>
        <Styled.Title>Tu balance:</Styled.Title>
        <Styled.BalanceDetail>
          <Styled.Dollar>$</Styled.Dollar>
          <Styled.Amount>{balance.toFixed(2)}</Styled.Amount>
        </Styled.BalanceDetail>
      </Styled.BalanceContainer>
    </Styled.CardContainer>
  );
}

export default Card;
