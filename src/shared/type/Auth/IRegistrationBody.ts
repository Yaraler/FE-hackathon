import { IloginBody } from "./ILoginBody";

export interface IRegistrationBody extends IloginBody {
  password: string
}
