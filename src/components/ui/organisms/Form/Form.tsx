/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import * as React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type AxiosError } from "axios";
import { useRouter } from "next/navigation";

import CustomInput from "@/components/ui/atoms/Input/Input";
import { useCreateAccount } from "@/redux/hooks";

import * as Styled from "./Form.styled";
import { schema, type FormFields } from "./Form.types";

function Form() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<FormFields>({
    defaultValues: {
      name: "",
      initialBalance: "",
      accountNumber: "",
    },
    resolver: zodResolver(schema),
  });
  const { mutate: createAccount } = useCreateAccount();
  const [serverError, setServerError] = React.useState<string | null>(null);
  const router = useRouter();
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    try {
      const dataCaptured = schema.safeParse(data);

      if (!dataCaptured.success) {
        dataCaptured.error.errors.forEach((error) => {
          setError(error.path[0] as keyof FormFields, {
            type: "manual",
            message: error.message,
          });
        });

        return;
      }

      createAccount(dataCaptured.data, {
        onSuccess: (responseData) => {
          console.log("Account created:", responseData);
          reset();
          setServerError(null);
          setTimeout(() => {
            router.push("/AccountPage");
          }, 2000);
        },
        onError: (error: AxiosError | any) => {
          console.error("Error creating account:", error);
          if (error.response.status === 409) {
            setServerError("El número de cuenta ya existe");
          }
        },
      });
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
          <CustomInput<FormFields>
            label="Nombre y apellido"
            name="name"
            register={register}
            inputMode="text"
            placeholder="Ej: Lionel Messi"
            validation={{
              required: "This is a required field",
            }}
            errors={errors}
            inputProps={{
              pattern: "[A-Za-z ]*",
              title: "Only letters and spaces are allowed",
            }}
          />
        </Styled.CustomContainer>
        <Styled.CustomContainer>
          <CustomInput<FormFields>
            label="Saldo inicial"
            name="initialBalance"
            register={register}
            inputMode="numeric"
            type="number"
            placeholder="Ej: 10"
            inputProps={{
              pattern: "^0$|^[1-9][0-9]*$",
              title: "Cannot start with zero",
            }}
            validation={{
              required: "This is a required field",
            }}
            errors={errors}
          />

          <CustomInput<FormFields>
            label="Número de cuenta"
            name="accountNumber"
            register={register}
            placeholder="Ej: 1987"
            type="number"
            inputProps={{
              maxLength: 4,
              pattern: "[0-9]*",
              title: "Up to 4 characters",
            }}
            validation={{
              required: "This is a required field",
            }}
            errors={errors}
          />
        </Styled.CustomContainer>
      </Styled.Inputs>
      {serverError ? (
        <Styled.Wrapper>
          <Styled.ErrorMessage>{serverError}</Styled.ErrorMessage>
        </Styled.Wrapper>
      ) : null}

      <Styled.SubmitButton disabled={isSubmitting || !isValid} type="submit">
        Crear cuenta
      </Styled.SubmitButton>
      {errors.root ? <Styled.ErrorMessage>{errors.root.message}</Styled.ErrorMessage> : null}
    </Styled.FormWrapper>
  );
}

export default Form;
