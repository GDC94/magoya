import * as React from "react";

import Logo from "@/components/ui/atoms/Logo/Logo";

import * as Styled from "./TableTech.styled";
import { type Tool, TOOLS_LEFT, TOOLS_RIGHT } from "./TableTech.types";

function TableTech() {
  return (
    <>
      <Styled.HeaderTop>
        <Logo width={23} height={23} />
        <Styled.Title>MagoyApp</Styled.Title>
      </Styled.HeaderTop>
      <Styled.Divider />

      <Styled.Paragraph>
        MagoyApp es una aplicación de gestión de cuentas bancarias. Puedes crear una cuenta bancaria y hacer todos los
        depósitos y retiros que quieras.
      </Styled.Paragraph>
      <Styled.Divider />
      <Styled.Paragraph>Para la construcción del frontend, se utilizaron las siguientes tecnologías:</Styled.Paragraph>

      <Styled.TechTable>
        <Styled.ItemsLeft>
          {TOOLS_LEFT.map((tool: Tool) => (
            <Styled.Item key={tool.id}>● {tool.name}</Styled.Item>
          ))}
        </Styled.ItemsLeft>
        <Styled.ItemsRight>
          {TOOLS_RIGHT.map((tool: Tool) => (
            <Styled.Item key={tool.id}>● {tool.name}</Styled.Item>
          ))}
        </Styled.ItemsRight>
      </Styled.TechTable>
    </>
  );
}

export default TableTech;
