import { IsString } from "class-validator"
import { StrategyCreated } from "passport"
import { Type } from "class-transformer"
import { CreateRequirementsBridage } from "./createRequirementBridage"


export class CreateBridageDto {
  @IsString()
  name: string
  @IsString()
  description: string
  @Type(() => CreateRequirementsBridage)
  requirementsBridage?: CreateRequirementsBridage[]

} 
