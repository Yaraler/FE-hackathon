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



export const AuthForm: React.FC<AuthProps> = ({ typePage }) => {
  const isLogin = typePage === 'login'
  const { handlerAuth, isError, error } = useAuth()
  const [stateRegister, setStateRegister] = useState(false)
  type FormData = typeof isLogin extends true ? IloginBody : IRegistrationBody
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    setValue,
  } = useForm<FormData>()
  const onSubmit = async (body: FormData) => {

    await handlerAuth({ body, typePage });
  };
  const handlerSwitchPage = () => {
    setStateRegister(!stateRegister)
  }
  const authFormData = typePage == "login" ? LoginFormData : RegistrationFormData
  console.log(error?.response?.data.message)
  return (
    <View >
      {!stateRegister &&
        authFormData.map((elem, index) =>
          <InputController key={index}
            input={elem}
            control={control}
            errors={errors}
          />
        )
      }
      {stateRegister && <BrigadeSelector setValue={setValue} handlerSubmit={handleSubmit(onSubmit)} />}
      <ErrorField error={error?.response?.data.message} />
      {typePage == "registration" &&
          <ItemButton
              title="Sign Up"
              handleSubmit={handleSubmit(handlerSwitchPage)}
          />
        }

      {typePage != "registration" &&
          <ItemButton
              title="Log in"
              handleSubmit={handleSubmit(onSubmit)} />}
    </View>

  )
}



