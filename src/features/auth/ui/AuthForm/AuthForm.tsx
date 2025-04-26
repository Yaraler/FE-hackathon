import { useForm, SubmitHandler } from "react-hook-form"
import { Button, View } from "react-native"
import { InputController } from "@/shared/ui/InputController/InputController"
import { IloginBody } from "@/shared/type/auth/ILoginBody"
import { AuthProps } from "@/shared/type/AuthProps/type"
import { LoginFormData } from "../data/login.data"
import { RegistrationFormData } from "../data/registration.data"
import { IRegistrationBody } from "@/shared/type/auth/IRegistrationBody"
import { ItemButton } from "@/shared/ui/ItemButton/ItemButton"

export const AuthForm: React.FC<AuthProps> = ({ typePage }) => {
  const isLogin = typePage === 'login'
  type FormData = typeof isLogin extends true ? IloginBody : IRegistrationBody
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>()
  const onSubmit = (data: FormData) => { console.log(data) }
  const authFormData = typePage == "login" ? LoginFormData : RegistrationFormData
  return (
    <View >
      {
        authFormData.map((elem, index) =>
          <InputController key={index} input={elem} control={control} errors={errors} />
        )
      }
      <ItemButton title="Submit" handleSubmit={handleSubmit(onSubmit)
      } />
    </View>

  )
}
