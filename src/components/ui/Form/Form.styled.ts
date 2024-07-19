import styled from "@emotion/styled";

import { FlexSpaceBetween } from "@/styles/themeParts/flex";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark[100]};
  border: 2px solid;
  border-radius: ${({ theme }) => theme.size["3"]};
  cursor: "pointer";
  outline: none;
  display: inline-block;
  padding: ${(props) => props.theme.size["1"]} ${(props) => props.theme.size["2"]};
  transition: background-color 0.3s;
  transition: 0.4s;
  color: white;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white[100]};
    border-color: ${({ theme }) => theme.colors.dark[100]};
    color: ${({ theme }) => theme.colors.dark[100]};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const CustomContainer = styled.div`
  width: 100%;
  ${FlexSpaceBetween}
  gap: 0.5rem;
`;
