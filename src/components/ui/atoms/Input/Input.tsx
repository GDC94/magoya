import * as React from "react";
import { type FieldValues } from "react-hook-form";

import * as Styled from "./Input.styled";
import { type CustomInputProps } from "./input.types";

/**
 * A custom input component that integrates with react-hook-form for form handling and validation.
 * It supports text and number input types, displays validation errors, and applies custom styles.
 *
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
  inputProps = {},
  options,
  defaultValue,
  value,
}: CustomInputProps<T> & {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}) {
  const errorMessage = errors[name]
    ?.message as unknown as string;

  return (
    <Styled.InputWrapper>
      <Styled.Label htmlFor={name as string}>
        {label.charAt(0).toUpperCase() +
          label.slice(1)}
      </Styled.Label>
      {type === "select" && options ? (
        <Styled.Select
          id={name as string}
          defaultValue={defaultValue}
          value={value}
          {...register(name, validation)}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </Styled.Select>
      ) : (
        <Styled.Input
          {...inputProps}
          id={name as string}
          type={type}
          placeholder={placeholder}
          {...register(name, validation)}
        />
      )}
      {errorMessage ? (
        <Styled.ErrorMessage>
          {errorMessage}
        </Styled.ErrorMessage>
      ) : null}
    </Styled.InputWrapper>
  );
}

export default CustomInput;
