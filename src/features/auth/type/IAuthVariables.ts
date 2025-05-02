import { IloginBody, IRegistrationBody } from "@/shared/type/Auth";
import { AuthProps } from "@/shared/type/AuthProps/type";
import { ITypePage } from "@/shared/type/ITypePage/ITypePage";


type IAuthBodyMap = {
  login: IloginBody;
  registration: IRegistrationBody;
};

export type IAuthVariables<T extends ITypePage = ITypePage> = {
  typePage: T;
  body: IAuthBodyMap[T];
};

export type IAuthVariablesHook<T extends ITypePage = ITypePage> =
  IAuthVariables<T> & {
    handlerZeroPage: () => void;
  };
