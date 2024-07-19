import styled from "@emotion/styled";

import { QUERIES } from "@/styles";
import { FlexBasicConfigColumn } from "@/styles/themeParts/flex";

export const TransactionCardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white[100]};
  border: 2px solid ${({ theme }) => theme.colors.dark[100]};
  border-left: 0px;
  padding: ${({ theme }) => theme.size["1"]};
  height: 100%;
  width: 100%;
  ${FlexBasicConfigColumn}

  @media ${QUERIES.tabletAndSmaller} {
    border: 2px solid ${({ theme }) => theme.colors.dark[100]};
    border-top: 0px;
  }
`;

export const FormWrapper = styled.form`
  padding: ${({ theme }) => theme.size["1"]};
  border: 1px solid ${({ theme }) => theme.colors.dark[100]};
  height: 80%;
  width: 100%;

  @media ${QUERIES.tabletAndSmaller} {
    border: 2px solid ${({ theme }) => theme.colors.dark[100]};
    border-top: 0px;
  }
`;

export const FooterCard = styled.div`
  background-color: ${({ theme }) => theme.colors.dark[100]};
  height: 20%;
  width: 100%;
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark[100]};
  border: 2px solid;
  border-radius: ${({ theme }) => theme.size["3"]};
  cursor: "pointer";
  outline: none;
  display: inline-block;
  padding: ${(props) => props.theme.size["0.5"]} ${(props) => props.theme.size["2"]};
  transition: background-color 0.3s;
  transition: 0.5s;
  color: white;
  font-weight: 600;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white[100]};
    border-color: ${({ theme }) => theme.colors.dark[100]};
    color: ${({ theme }) => theme.colors.dark[100]};
  }
`;
