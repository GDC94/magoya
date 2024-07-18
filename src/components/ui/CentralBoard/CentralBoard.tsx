import * as React from "react";

import Form from "@/components/ui/Form/Form";

import * as Styled from "./CentralBoard.styled";

function CentralBoard() {
  return (
    <Styled.CentralBoardContainer>
      <Styled.Left>
        <Form />
      </Styled.Left>
      {/*
        <Styled.Right>
        <Image src="/machine.avif" alt="Logo" width={800} height={400} priority />
      </Styled.Right>
        */}
    </Styled.CentralBoardContainer>
  );
}

export default CentralBoard;
