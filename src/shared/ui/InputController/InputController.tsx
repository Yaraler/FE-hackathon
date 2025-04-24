import { Input } from "../Input/Input"
import { Controller } from 'react-hook-form';
import { InputControllerProps } from "./type";
export const InputController: React.FC<InputControllerProps> = ({ errors, control, input }) => {
  return (
    <Controller
      control={control}
      name={input.name}
      rules={input.validation}
      defaultValue=""
      render={({ field }) => (
        <Input
          field={field}
          placeholder={input.placeholder}
          error={errors[input.name]?.message}
          type={input.type}
        />
      )} />
  )
}
