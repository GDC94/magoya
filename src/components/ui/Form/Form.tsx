import * as React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import CustomInput from "@/components/ui/atoms/Input/Input";

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
      <Styled.Inputs>
        <Styled.CustomContainer>
          <CustomInput
            label="Nombre y apellido"
            name="name"
            register={register}
            placeholder="Ej: Lionel Messi"
            validation={{
              required: "This is a required field",
              validate: (value) => value.length > 2 || "This field must be longer than 2 characters",
            }}
            errors={errors}
          />
        </Styled.CustomContainer>
        <Styled.CustomContainer>
          <CustomInput
            label="Saldo inicial"
            name="initialBalance"
            register={register}
            placeholder="Ej: 10"
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
            placeholder="Ej: 1987"
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
      </Styled.Inputs>

      <Styled.SubmitButton disabled={isSubmitting} type="submit">
        Crear cuenta
      </Styled.SubmitButton>
      {errors.root ? <Styled.ErrorMessage>{errors.root.message}</Styled.ErrorMessage> : null}
    </Styled.FormWrapper>
  );
}

export default Form;
