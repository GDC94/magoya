import * as React from "react";
import { type FieldValues } from "react-hook-form";

import * as Styled from "./Input.styled";
import { type CustomInputProps } from "./input.types";

/**
 * @method A custom input component that integrates with react-hook-form for form handling and validation.
 * It supports text and number input types, displays validation errors, and applies custom styles.
 *
 * @template T - The type of form data.
 * @param props - The props for the custom input component.
 * @returns The rendered custom input component with react hook form integrated.
 */

function CustomInput<T extends FieldValues>({
  type = "text",
  name,
  label,
  register,
  placeholder,
  errors,
  validation,
}: CustomInputProps<T>) {
  const errorMessage = errors[name]?.message as unknown as string;

  return (
    <Styled.InputWrapper>
      <Styled.Label htmlFor={name as string}>{label.charAt(0).toUpperCase() + label.slice(1)}</Styled.Label>
      <Styled.Input id={name as string} type={type} placeholder={placeholder} {...register(name, validation)} />
      {errorMessage ? <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage> : null}
    </Styled.InputWrapper>
  );
}

export default CustomInput;
