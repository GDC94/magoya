"use client";
import React from "react";

import { Layout } from "@/components/ui/commons/LayoutClient";
import { BalanceCard } from "@/components/ui/molecules/BalanceCard";
import { TransactionCard } from "@/components/ui/molecules/TransactionCard";
import { Header } from "@/components/ui/molecules/Header";

import * as Styled from "./Account.styles";

function Account() {
  return (
    <Layout>
      <Styled.WrapperAccounts>
        <Header />
        <Styled.AccountContainer>
          <Styled.AccountCentralBoard>
            <Styled.BalanceContainer>
              <BalanceCard />
            </Styled.BalanceContainer>
            <Styled.TransactionsContainer>
              <TransactionCard />
            </Styled.TransactionsContainer>
          </Styled.AccountCentralBoard>
        </Styled.AccountContainer>
      </Styled.WrapperAccounts>
    </Layout>
  );
}

export default Account;
