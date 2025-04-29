export interface IRequirement {
  _id: string;
  exercise: string;
  minimum: number | null;
  maximum: number | null;
  brigadeId: string;
}
