import * as React from "react";
import Image from "next/image";

import * as Styled from "./CentralBoard.styled";

function CentralBoard() {
  return (
    <Styled.CentralBoardContainer>
      <Styled.Left />
      <Styled.Right>
        <Image src="/machine.avif" alt="Logo" width={800} height={400} priority />
      </Styled.Right>
    </Styled.CentralBoardContainer>
  );
}

export default CentralBoard;
