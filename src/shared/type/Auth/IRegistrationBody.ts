import { IloginBody } from "./ILoginBody";

export interface IRegistrationBody extends IloginBody {
  name: string
  brigadId: string
}
