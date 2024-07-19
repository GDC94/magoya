import styled from "@emotion/styled";

import { FlexBasicConfigColumn } from "@/styles/themeParts/flex";

export const InputWrapper = styled.div`
  ${FlexBasicConfigColumn}
  width: 100%;
  cursor: pointer;
  position: relative; 
  margin-bottom: ${({ theme }) => theme.size["1"]}; 
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
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.size["0.25"]}; 
  font-size: ${({ theme }) => theme.size["0.875"]};
  color: #909090;
`;

export const ErrorMessage = styled.span`
  color: red;
  background-color: transparent; 
  font-size: ${({ theme }) => theme.size["0.75"]};
  position: absolute; 
  bottom: -20px; 
  left: 0;
  width: 100%; 
  height: 16px; 
  overflow: hidden; 
  white-space: nowrap; 
`;

export const Select = styled.select`
  width: 100%;
  margin-top: ${({ theme }) =>
    theme.size["0.25"]};
  padding: ${({ theme }) => theme.size["0.75"]};
  border: 1px solid #ccc;
  border-radius: 4px;
  appearance: none;
  background-color: white;
`;
