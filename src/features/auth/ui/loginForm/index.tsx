import { useForm, SubmitHandler } from "react-hook-form"
import { Button, View } from "react-native"

export const loginForm = (props: {}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>()
  const onSubmit = () => { }

  return (
    <View >
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>

  )
}
