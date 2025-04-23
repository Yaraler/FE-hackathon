import { Input } from "../Input/Input"
import { Controller } from 'react-hook-form';
export const InputController = (props: {}) => {
  return (
    <Controller
      control={control}
      name="name"
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          onChange={onChange}
          onBlur={onBlur}
          value={value} />
      )} />
  )
}
