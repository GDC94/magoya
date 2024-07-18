import * as React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

import CustomInput from "../atoms/Input/Input";

import * as Styled from "./Form.styled";
import { accountNumbeRegex, initialBalanceRegex, type FormFields } from "./Form.types";

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
        message: "There was an error while submitting the form",
      });
    }
  };

  return (
    <Styled.FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        name="name"
        register={register}
        placeholder="Name"
        validation={{
          required: "This is a required field",
          validate: (value) => value.toString().length > 2 || "This field must be longer than 2 characters",
        }}
        errors={errors}
      />

      <CustomInput
        name="lastName"
        register={register}
        placeholder="Lastname"
        validation={{
          required: "This is a required field",
          validate: (value) => value.toString().length > 3 || "This field must be longer than 3 characters",
        }}
        errors={errors}
      />

      <CustomInput
        name="initialBalance"
        register={register}
        placeholder="Put your initial balance"
        validation={{
          required: "This is a required field",
          validate: (value) => {
            if (!initialBalanceRegex.test(Number(value).toString())) {
              return "Incorrect format";
            }

            return true;
          },
        }}
        errors={errors}
      />

      <CustomInput
        name="accountNumber"
        register={register}
        placeholder="Choose a account number"
        validation={{
          required: "This is a required field",
          validate: (value) => {
            if (!accountNumbeRegex.test(Number(value).toString())) {
              return "Incorrect format";
            }

            return true;
          },
        }}
        errors={errors}
      />

      <Styled.SubmitButton disabled={isSubmitting} type="submit">
        Enviar
      </Styled.SubmitButton>
      {errors.root ? <Styled.ErrorMessage>{errors.root.message}</Styled.ErrorMessage> : null}
    </Styled.FormWrapper>
  );
}

export default Form;
