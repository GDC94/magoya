import * as React from "react";

import Form from "@/components/ui/Form/Form";

import TableTech from "../molecules/TableTech/TableTech";
import { MagneticButton } from "../molecules/MagneticButton";

import * as Styled from "./CentralBoard.styled";

function CentralBoard() {
  return (
    <Styled.CentralBoardContainer>
      <Styled.Left>
        <Styled.HeaderForm>
          <Styled.Title>
            Creá tu cuenta en <Styled.Brand>MagoyApp</Styled.Brand> y comenzá a operar
          </Styled.Title>
        </Styled.HeaderForm>
        <Form />
      </Styled.Left>

      <Styled.Right>
        <Styled.MiddleRight>
          <TableTech />
        </Styled.MiddleRight>
        <Styled.MiddleLeft>
          <Styled.ButtonsRepositories>
            <Styled.ButtonLink>Linkedin</Styled.ButtonLink>
            <Styled.ButtonLink>Github Frontend</Styled.ButtonLink>
            <Styled.ButtonLink>Github Backend</Styled.ButtonLink>
          </Styled.ButtonsRepositories>
<Styled.MagicButtonContent>
<MagneticButton />
</Styled.MagicButtonContent>
   
        </Styled.MiddleLeft>
      </Styled.Right>
    </Styled.CentralBoardContainer>
  );
}

export default CentralBoard;
