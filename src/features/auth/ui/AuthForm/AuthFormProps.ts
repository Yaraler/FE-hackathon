import { AuthProps } from "@/shared/type/AuthProps/type";
import React from "react";


export interface AuthFormProps extends AuthProps {
  setStateRegister: React.Dispatch<React.SetStateAction<number>>
  stateRegister: number

}

