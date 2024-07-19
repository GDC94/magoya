import { type Path, type UseFormRegister, type FieldValues, type FieldErrors } from "react-hook-form";

export interface CustomInputProps<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  register: UseFormRegister<T>;
  placeholder?: string;
  type?: "text" | "number" | "select";
  label: string;
  errors: FieldErrors<T>;
  validation?: {
    required?: string | boolean;
    validate?: (value: T[Path<T>]) => boolean | string | Promise<boolean | string> | undefined;
  };
  options?: { value: string; label: string }[]; // new prop for select options
  defaultValue?: string; // new prop for default value
  value?: string; // new prop for controlled value
}
