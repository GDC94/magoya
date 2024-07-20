/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import * as React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector } from "react-redux";

import { useCreateTransaction } from "@/redux/hooks";
import { CustomInput } from "@/components/ui/atoms/Input";
import Logo from "@/components/ui/atoms/Logo/Logo";
import { type RootState } from "@/redux/store";

import * as Styled from "./TransactionCard.styled";
import { type TransactionFormFields, transactionSchema } from "./TransactionCard.types";

function TransactionCard() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TransactionFormFields>({
    defaultValues: {
      amount: "",
      transactionType: "deposito",
    },
    resolver: zodResolver(transactionSchema),
  });

  const { mutate: createTransaction } = useCreateTransaction();
  const [serverError, setServerError] = React.useState<string | null>(null);

  const lastCreatedAccount = useSelector((state: RootState) => state.account.lastCreatedAccount);
  const accountNumber = lastCreatedAccount?.accountNumber || "";

  const onSubmit: SubmitHandler<TransactionFormFields> = (data) => {
    try {
      const transaction = {
        type: data.transactionType,
        amount: parseFloat(data.amount),
        accountNumber,
      };

      createTransaction(transaction, {
        onSuccess: (response) => {
          reset();
          console.log("reseeponse", response)
        },
        onError: (error) => {
          console.error("Error creating transaction:", error);
          setServerError("Error creating transaction. Please try again.");
        },
      });
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
            placeholder="Ej 1000"
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
            validation={{
              required: "This is a required field",
              validate: (value) => value.length > 2 || "This field must be longer than 2 characters",
            }}
            errors={errors}
          />
        </Styled.InputsWrapper>
        {serverError ? (
          <Styled.Wrapper>
            <Styled.ErrorMessage>{serverError}</Styled.ErrorMessage>
          </Styled.Wrapper>
        ) : null}
        <Styled.ButtonSubmit disabled={isSubmitting} type="submit">
          Enviar
        </Styled.ButtonSubmit>
        {errors.root ? <Styled.ErrorMessage>{errors.root.message}</Styled.ErrorMessage> : null}
      </Styled.FormWrapper>
    </Styled.TransactionCardContainer>
  );
}

export default TransactionCard;
