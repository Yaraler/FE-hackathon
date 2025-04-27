import { IsString } from "class-validator";
import { CreateRequirementsBridage } from "./createRequirementBridage";


export class CreateRequirementsBridageDto extends CreateRequirementsBridage {
  @IsString()
  id: string
}
