/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import * as React from "react";
import { useSelector } from "react-redux";

import { useGetBalance } from "@/redux/hooks";
import { type RootState } from "@/redux/store";

import * as Styled from "./Card.styled";

function Card() {
  const lastCreatedAccount = useSelector((state: RootState) => state.account.lastCreatedAccount);

  const accountId = lastCreatedAccount?.id?.toString() || "";
  const { data } = useGetBalance(accountId);

  /*
  if (error) {
    return <Styled.ErrorContainer>{error}</Styled.ErrorContainer>;
  }
  */
  return (
    <Styled.CardContainer>
      <Styled.Top>
        <Styled.NameContainer>
          <Styled.Title>Nombre:</Styled.Title>
          <Styled.Subtitle>{lastCreatedAccount?.name}</Styled.Subtitle>
        </Styled.NameContainer>
        <Styled.AccountContainer>
          <Styled.Title>Número de cuenta:</Styled.Title>
          <Styled.Subtitle>{lastCreatedAccount?.accountNumber}</Styled.Subtitle>
        </Styled.AccountContainer>
      </Styled.Top>
      <Styled.BalanceContainer>
        <Styled.Title>Tu balance:</Styled.Title>
        <Styled.BalanceDetail>
          <Styled.Dollar>$</Styled.Dollar>
          <Styled.Amount>{data?.balance}</Styled.Amount>
        </Styled.BalanceDetail>
      </Styled.BalanceContainer>
    </Styled.CardContainer>
  );
}

export default Card;
