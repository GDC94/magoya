import * as React from "react";

import Form from "@/components/ui/Form/Form";

import TableTech from "../molecules/TableTech/TableTech";
import { MagneticButton } from "../molecules/MagneticButton";

import * as Styled from "./CentralBoard.styled";

function CentralBoard() {
  return (
    <Styled.CentralBoardContainer>
      <Styled.Left>
        <Form />
      </Styled.Left>

      <Styled.Right>
        <Styled.MiddleLeft />
        <Styled.MiddleRight>
          <TableTech />
          <MagneticButton />
        </Styled.MiddleRight>
      </Styled.Right>
    </Styled.CentralBoardContainer>
  );
}

export default CentralBoard;

{
  /*
         <Image src="/machine.avif" alt="Logo" width={800} height={400} priority />
        */
}
