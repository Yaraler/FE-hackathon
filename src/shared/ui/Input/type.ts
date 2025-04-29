import { InputType } from "@/shared/type"

export interface InputProps {
  typePage: "login" | "registration";
  field: any
  placeholder: string
  type?: InputType
}
