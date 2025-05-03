import { ITypePage } from "@/shared/type/ITypePage/ITypePage";
import { InputConfig } from "../../type/InputConfig/type";


export interface InputControllerProps {
  control: any;
  errors: any;
  typePage: ITypePage
  input: InputConfig
}
