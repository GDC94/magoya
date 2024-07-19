import * as React from "react";

import Form from "@/components/ui/organisms/Form/Form";
import TableTech from "@/components/ui/molecules/TableTech/TableTech";
import { MagneticButton } from "@/components/ui/molecules/MagneticButton";

import { StyledArrowTop } from "../../molecules/MagneticButton/MagneticButton.styles";

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
            <Styled.ButtonLink>
              Linkedin <StyledArrowTop size={10} />{" "}
            </Styled.ButtonLink>
            <Styled.ButtonLink>
              Repositorio del frontend <StyledArrowTop size={10} />
            </Styled.ButtonLink>
            <Styled.ButtonLink>
              Repositorio del backend <StyledArrowTop size={10} />
            </Styled.ButtonLink>
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
