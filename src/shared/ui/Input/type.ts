import { InputType } from "@/shared/type"

export interface InputProps {
  typePage: "login" | "registration";
  field: any
  placeholder: string
  secureTextEntry?: boolean,
  showEyeIcon?: boolean

  type?: InputType
}
