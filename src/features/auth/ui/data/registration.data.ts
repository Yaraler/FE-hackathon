import { InputConfig } from "@/shared/type/InputConfig/type";
import { LoginFormData } from "./login.data";

export const RegistrationFormData: InputConfig[] = [
  {
    name: "name",
    type: "default",
    placeholder: "name",
    validation: {
      required: "This field is required",
      minLength: {
        value: 5,
        message: "Name must be at least 2 characters",
      },
    },
  },
  ...LoginFormData
]






