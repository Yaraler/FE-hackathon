import { IRegistrationBody } from "@/shared/type/Auth";
import { UseFormSetValue } from "react-hook-form";

export interface BrigadeSelectorProps {
  setValue: UseFormSetValue<IRegistrationBody>;
  handlerSubmit: () => void
}
