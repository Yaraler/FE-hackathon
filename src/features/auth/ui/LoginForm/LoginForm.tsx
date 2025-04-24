import { useForm, SubmitHandler } from "react-hook-form"
import { Button, View } from "react-native"
import { InputController } from "@/shared/ui/InputController/InputController"
import { LoginFormData } from "./data/login.data"
import { IloginBody } from "@/shared/type/auth/ILoginBody"

export const LoginForm = (state: "login" | "registration") => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<any>()
  const onSubmit = (data: IloginBody) => { console.log("goid") }

  return (
    <View >
      {
        LoginFormData.map((elem, index) =>
          <InputController key={index} input={elem} control={control} errors={errors} />
        )
      }
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>

  )
}
