import { useForm, SubmitHandler } from "react-hook-form"
import { Button, StyleSheet, View } from "react-native"
import { InputController } from "@/shared/ui/InputController/InputController"
import { AuthProps } from "@/shared/type/AuthProps/type"
import { LoginFormData } from "../data/login.data"
import { RegistrationFormData } from "../data/registration.data"
import { ItemButton } from "@/shared/ui/ItemButton/ItemButton"
import { IloginBody, IRegistrationBody } from "@/shared/type/Auth"
import { useAuth } from "../../model/hooks/useAuth"
import { ErrorField } from "@/shared/ui/ErrorField/ErrorField"
import { useEffect, useState } from "react"
import { BrigadeSelector } from "@/entites/brigade/ui/BrigadeSelector/BrigadeSelector"
import { AuthFormProps } from "./AuthFormProps"



export const AuthForm: React.FC<AuthFormProps> = ({ typePage, setStateRegister, stateRegister }) => {
  const isLogin = typePage === 'login'
  const { handlerAuth, isError, error } = useAuth()
  type FormData = typeof isLogin extends true ? IloginBody : IRegistrationBody
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<FormData>()
  const onSubmit = async (body: FormData) => {
    await handlerAuth({ body, typePage, handlerZeroPage });
  };
  const handlerZeroPage = () => {
    setStateRegister(0)
  }
  const handlerNextPage = () => {
    if (stateRegister != 2) setStateRegister(++stateRegister)
  }
  const handlerPreviousPage = () => {
    if (stateRegister != 0) setStateRegister(--stateRegister)
  }

  const authFormData = typePage == "login" ? LoginFormData : RegistrationFormData
  return (
    <View >
      {stateRegister == 0 &&
        authFormData.map((elem, index) =>
          <InputController
            key={index}
            input={elem}
            typePage={typePage}
            control={control}
            errors={errors}
          />
        )
      }
      {stateRegister > 0 && <BrigadeSelector
        stateRegister={stateRegister}
        setValue={setValue}
        handlerSubmit={handleSubmit(onSubmit)}
        handlerNextPage={handlerNextPage}
      />}

      <ErrorField error={error?.response?.data.message} />
      {typePage == "registration" && stateRegister == 0 &&
        <ItemButton
          title="next"
          handleSubmit={handleSubmit(handlerNextPage)}
        />
      }
      {typePage == "registration" && stateRegister > 0 &&
        <ItemButton
          title="previous"
          handleSubmit={handlerPreviousPage}
        />
      }

      {typePage != "registration" &&
        <ItemButton
          title="Log in"
          handleSubmit={handleSubmit(onSubmit)} />}
    </View>

  )
}



