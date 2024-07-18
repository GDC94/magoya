import * as React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

import * as Styled from "./Form.styled";
import { type FormFields } from "./Form.types";

function Form() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      name: "",
      lastName: "",
      initialBalance: 0,
      accountNumber: 0,
    },
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    try {
      console.log(data);
    } catch (error) {
      setError("root", {
        type: "manual",
        message: "There was an error while submitting the form",
      });
    }
  };

  const regex = /^\d{4}$/;

  return (
    <Styled.FormWrapper onSubmit={handleSubmit(onSubmit)}>
      {/* Name field */}
      <Styled.Label htmlFor="textInput">Name:</Styled.Label>
      <input
        type="text"
        placeholder="Name"
        {...register("name", {
          required: "This is a required field",
          validate: (value) => value.length > 2 || "This field must be longer than 2 characters",
        })}
      />
      {errors.name ? <Styled.ErrorMessage>{errors.name.message}</Styled.ErrorMessage> : null}

      {/* LastName field */}
      <Styled.Label htmlFor="textInput">Lastname:</Styled.Label>
      <input
        {...register("lastName")}
        type="text"
        placeholder="Lastname"
        {...register("lastName", {
          required: "This is a required field",
          validate: (value) => value.length > 3 || "This field must be longer than 3 characters",
        })}
      />
      {errors.lastName ? <Styled.ErrorMessage>{errors.lastName.message}</Styled.ErrorMessage> : null}

      {/* Initial balance field */}
      <Styled.Label htmlFor="numberInput">Initial balance:</Styled.Label>
      <input
        {...register("initialBalance")}
        type="number"
        placeholder="Put your initial balance"
        {...register("lastName", {
          required: "This is a required field",
          validate: (value) => {
            if (regex.test(value)) {
              return "Incorrect format";
            }

            return true;
          },
        })}
      />
      {errors.lastName ? <Styled.ErrorMessage>{errors.lastName.message}</Styled.ErrorMessage> : null}

      {/* Button submit */}
      <Styled.SubmitButton disabled={isSubmitting} type="submit">
        Enviar
      </Styled.SubmitButton>
      {errors.root ? <Styled.ErrorMessage>{errors.root.message}</Styled.ErrorMessage> : null}
    </Styled.FormWrapper>
  );
}

export default Form;
