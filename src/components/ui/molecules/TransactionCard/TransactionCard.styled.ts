import styled from "@emotion/styled";

import { QUERIES } from "@/styles";
import { FlexBasicConfigColumn, FlexSpaceBetween } from "@/styles/themeParts/flex";

export const TransactionCardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white[100]};
  border: 2px solid ${({ theme }) => theme.colors.dark[100]};
  border-left: 0px;
  border-bottom: 5px solid ${({ theme }) => theme.colors.dark[100]};
  padding: ${({ theme }) => theme.size["1"]};
  height: 100%;
  width: 100%;
  ${FlexBasicConfigColumn}

  @media ${QUERIES.tabletAndSmaller} {
    border: 2px solid ${({ theme }) => theme.colors.dark[100]};
    border-top: 0px;
  }
`;

export const TransactionTitle = styled.h2`
  font-size: ${(props) => props.theme.size["2"]};
  color: ${({ theme }) => theme.colors.dark[100]};
  font-weight: 600;
  letter-spacing: -2px;
  line-height: 120%;
`;

export const HeaderCard = styled.div`
  width: 100%;
  ${FlexSpaceBetween}
`;

export const Legends = styled.div``;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.size["1.25"]};
  margin-top: ${(props) => props.theme.size["0.5"]};
  margin-bottom: ${(props) => props.theme.size["2"]};
`;

export const TransactionHeader = styled.h5`
  font-size: ${(props) => props.theme.size["1"]};
  color: darkgrey;
  font-weight: 500;
  margin-bottom: ${(props) => props.theme.size["1"]};
`;

export const FormWrapper = styled.form`
  height: 85%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${QUERIES.tabletAndSmaller} {
    border: 1px solid ${({ theme }) => theme.colors.dark[100]};
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: ${({ theme }) => theme.size["0.75"]};
  font-weight: 500;
`;

export const FooterCard = styled.div`
  background-color: hsl(262.25deg 58.17% 70%);
  border: 1px solid ${({ theme }) => theme.colors.dark[100]};
  height: 15%;
  width: 100%;
`;
export const Wrapper = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark[100]};
  border: 2px solid;
  border-radius: ${({ theme }) => theme.size["3"]};
  cursor: "pointer";
  outline: none;
  display: inline-block;
  padding: ${(props) => props.theme.size["0.875"]} ${(props) => props.theme.size["2"]};
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
