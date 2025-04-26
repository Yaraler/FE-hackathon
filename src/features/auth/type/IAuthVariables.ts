import { IloginBody, IRegistrationBody } from "@/shared/type/Auth";

export type IAuthVariables =
  | { typePage: "login"; body: IloginBody }
  | { typePage: "registration"; body: IRegistrationBody };

