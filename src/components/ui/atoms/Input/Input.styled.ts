import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
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
  font-size: 12px;
`;
