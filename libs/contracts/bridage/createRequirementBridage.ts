import { IsNumber, IsString } from "class-validator";

export class CreateRequirementsBrigade {
  @IsString()
  exercise: string;
  @IsNumber()
  minimum?: number;
  @IsNumber()
  maximum?: number;
}
