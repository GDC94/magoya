import * as React from "react";
import { type Path, type UseFormRegister, type FieldValues } from "react-hook-form";

import * as Styled from "./Input.styled";

interface StyledInputProps<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  register: UseFormRegister<T>;
}

function Input<T extends FieldValues>({ type = "text", name, register, ...rest }: StyledInputProps<T>) {
  return <Styled.Input type={type} {...register(name)} {...rest} />;
}

export default Input;
