import * as React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import CustomInput from "../atoms/Input/Input";

import * as Styled from "./Form.styled";
import { accountNumbeRegex, initialBalanceRegex, schema, type FormFields } from "./Form.types";

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
      initialBalance: "",
      accountNumber: "",
    },
    resolver: zodResolver(schema),
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
      <Styled.CustomContainer>
        <CustomInput
          label="Nombre"
          name="name"
          register={register}
          placeholder="Nombre"
          validation={{
            required: "This is a required field",
            validate: (value) => value.length > 2 || "This field must be longer than 2 characters",
          }}
          errors={errors}
        />

        <CustomInput
          label="Apellido"
          name="lastName"
          register={register}
          placeholder="Apellido"
          validation={{
            required: "This is a required field",
            validate: (value) => value.length > 3 || "This field must be longer than 3 characters",
          }}
          errors={errors}
        />
      </Styled.CustomContainer>
      <Styled.CustomContainer>
        <CustomInput
          label="Saldo inicial"
          name="initialBalance"
          register={register}
          placeholder="Ej: 20000"
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
          label="Número de cuenta"
          name="accountNumber"
          register={register}
          placeholder="Ej: 1994"
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
      </Styled.CustomContainer>

      <Styled.SubmitButton disabled={isSubmitting} type="submit">
        Enviar
      </Styled.SubmitButton>
      {errors.root ? <Styled.ErrorMessage>{errors.root.message}</Styled.ErrorMessage> : null}
    </Styled.FormWrapper>
  );
}

export default Form;
