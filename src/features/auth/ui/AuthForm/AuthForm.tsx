import { useForm, SubmitHandler } from "react-hook-form"
import {Button, StyleSheet, View} from "react-native"
import { InputController } from "@/shared/ui/InputController/InputController"
import { AuthProps } from "@/shared/type/AuthProps/type"
import { LoginFormData } from "../data/login.data"
import { RegistrationFormData } from "../data/registration.data"
import { ItemButton } from "@/shared/ui/ItemButton/ItemButton"
import { IloginBody, IRegistrationBody } from "@/shared/type/Auth"
import { useAuth } from "../../model/hooks/useAuth"
import { ErrorField } from "@/shared/ui/ErrorField/ErrorField"
export const AuthForm: React.FC<AuthProps> = ({ typePage }) => {
  const isLogin = typePage === 'login'
  const { handlerAuth, isError, error } = useAuth()
  type FormData = typeof isLogin extends true ? IloginBody : IRegistrationBody
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>()
  const onSubmit = (body: FormData) => {
    handlerAuth({ body, typePage })
  }
  const authFormData = typePage == "login" ? LoginFormData : RegistrationFormData
  console.log(error?.response?.data.message)
  return (
    <View >
      {
        authFormData.map((elem, index) =>
          <InputController  key={index}
                            input={elem}
                            control={control}
                            errors={errors}
                           />
        )
      }
      <ErrorField error={error?.response?.data.message} />
      <ItemButton title="Submit" handleSubmit={handleSubmit(onSubmit)} />
    </View>

  )
}



