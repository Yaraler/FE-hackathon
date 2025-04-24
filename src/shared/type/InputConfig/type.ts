export interface InputConfig {
  name: string;
  placeholder: string;
  type: string;
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
