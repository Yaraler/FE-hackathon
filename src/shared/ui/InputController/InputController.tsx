import { Input } from "../Input/Input"
import { Controller } from 'react-hook-form';
import { InputControllerProps } from "./type";
import { ErrorField } from "../ErrorField/ErrorField";
export const InputController: React.FC<InputControllerProps> = ({ errors, control, input }) => {
  return (
    <Controller
      control={control}
      name={input.name}
      rules={input.validation}
      defaultValue=""
      render={({ field }) => (
        <>
          <Input
            field={field}
            typePage="login"
            placeholder={input.placeholder}
            type={input.type}
            secureTextEntry={input.name === 'password'}
            showEyeIcon={input.name === 'password'}
          />
          <ErrorField error={errors[input.name]?.message} />

        </>

      )} />
  )
}
