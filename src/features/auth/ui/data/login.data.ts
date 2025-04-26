import { InputConfig } from "@/shared/type/InputConfig/type";

export const LoginFormData: InputConfig[] = [
  {
    name: `email`,
    type: "email-address",
    placeholder: "email",
    validation: {
      required: "This field is required",
      validate: (value: string) => {
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Invalid email username format";
        }
        return true;
      },
    },
  },
  {
    name: "password",
    type: "default",
    placeholder: "password",
    validation: {
      required: "This field is required",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
      },
    },
  },

]


