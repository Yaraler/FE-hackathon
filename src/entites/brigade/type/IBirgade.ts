import { IRequirement } from "./IRequirements";

export interface IBrigade {
  _id: string;
  name: string;
  description: string;
  users: any | null;
  image: string;
  requirementsBrigadeIds: string[];
  requirements: IRequirement[];
}
