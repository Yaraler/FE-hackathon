import { InputType } from "../InputType/type";

export interface InputConfig {
  name: string;
  placeholder: string;
  type: InputType
  validation: {
    required?: string | boolean;
    pattern?: { value: RegExp; message: string };
    validate?: any
    minLength?: {
      value: number,
      message: string,
    }
  }
}
