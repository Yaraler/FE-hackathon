import { IsNumber, IsString } from "class-validator";

export class CreateRequirementsBridage {
  @IsString()
  exercise: string;
  @IsNumber()
  minimum?: number;
  @IsNumber()
  maximum?: number;
}
