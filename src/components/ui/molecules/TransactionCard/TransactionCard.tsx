import * as React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CustomInput } from "@/components/ui/atoms/Input";
import Logo from "@/components/ui/atoms/Logo/Logo";

import * as Styled from "./TransactionCard.styled";
import { type TransactionFormFields, transactionSchema } from "./TransactionCard.types";

function TransactionCard() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<TransactionFormFields>({
    defaultValues: {
      amount: "",
      transactionType: "deposito",
    },
    resolver: zodResolver(transactionSchema),
  });

  const onSubmit: SubmitHandler<TransactionFormFields> = (data) => {
    try {
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "There was an error while submitting the form",
      });
    }
  };

  return (
    <Styled.TransactionCardContainer>
      <Styled.HeaderCard>
        <Styled.Legends>
          <Styled.TransactionTitle>Depósitos y transferencias</Styled.TransactionTitle>
          <Styled.TransactionHeader>Aquí podés depositar o transferir dinero de tu cuenta.</Styled.TransactionHeader>
        </Styled.Legends>
        <Logo width={40} height={40} />
      </Styled.HeaderCard>

      <Styled.FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Styled.InputsWrapper>
          <CustomInput<TransactionFormFields>
            label="Colocá el monto de la operación"
            type="number"
            name="amount"
            register={register}
            validation={{
              required: "This is a required field",
              validate: (value) => value.length > 2 || "This field must be longer than 2 characters",
            }}
            errors={errors}
          />

          <CustomInput<TransactionFormFields>
            type="select"
            options={["deposito", "transferencia"].map((option) => ({
              value: option,
              label: option,
            }))}
            label="Depósito o transferencia"
            name="transactionType"
            register={register}
            placeholder=""
            validation={{
              required: "This is a required field",
              validate: (value) => value.length > 2 || "This field must be longer than 2 characters",
            }}
            errors={errors}
          />
        </Styled.InputsWrapper>
        <Styled.ButtonSubmit disabled={isSubmitting} type="submit">
          Enviar
        </Styled.ButtonSubmit>
      </Styled.FormWrapper>
      <Styled.FooterCard />
    </Styled.TransactionCardContainer>
  );
}

export default TransactionCard;
