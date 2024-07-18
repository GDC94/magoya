import styled from "@emotion/styled";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
