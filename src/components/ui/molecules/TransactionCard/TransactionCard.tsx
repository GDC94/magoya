import * as React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CustomInput } from "@/components/ui/atoms/Input";

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
      initialBalance: "",
      accountNumber: "",
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
      <Styled.FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          label=""
          name="initialBalance"
          register={register}
          placeholder=""
          validation={{
            required: "This is a required field",
            validate: (value) => value.length > 2 || "This field must be longer than 2 characters",
          }}
          errors={errors}
        />

        <CustomInput
          label=""
          name="initialBalance"
          register={register}
          placeholder=""
          validation={{
            required: "This is a required field",
            validate: (value) => value.length > 2 || "This field must be longer than 2 characters",
          }}
          errors={errors}
        />
        <Styled.ButtonSubmit disabled={isSubmitting} type="submit">
          Enviar
        </Styled.ButtonSubmit>
      </Styled.FormWrapper>
      <Styled.FooterCard />
    </Styled.TransactionCardContainer>
  );
}

export default TransactionCard;
