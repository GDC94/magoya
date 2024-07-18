"use client";
import React from "react";

import { Layout } from "@/components/ui/commons/LayoutClient";
import Header from "@/components/ui/molecules/Header/Header";
import CentralBoard from "@/components/ui/CentralBoard/CentralBoard";

import * as Styled from "./Dashboard.styles";

function Dashboard() {
  return (
    <Layout>
      <Styled.DashboardContainer>
        <Styled.ContainerTop>
          <Header />
        </Styled.ContainerTop>
        <Styled.ContainerBottom />
        <CentralBoard />
      </Styled.DashboardContainer>
    </Layout>
  );
}

export default Dashboard;
