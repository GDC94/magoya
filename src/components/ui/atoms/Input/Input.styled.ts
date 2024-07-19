import styled from "@emotion/styled";

import { FlexBasicConfigColumn } from "@/styles/themeParts/flex";

export const InputWrapper = styled.div`
  ${FlexBasicConfigColumn}
  width: 100%;
  cursor: pointer;
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.size["0.75"]};
  font-size: ${({ theme }) => theme.size["1"]};
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  margin: 5px 0;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: ${({ theme }) => theme.size["0.75"]};
`;

export const Select = styled.select`
  width: 100%;
  margin-top:  ${({ theme }) => theme.size["0.25"]};
  padding: ${({ theme }) => theme.size["0.75"]};
  border: 1px solid #ccc;
  border-radius: 4px;
  appearance: none;
  background-color: white;
`;
