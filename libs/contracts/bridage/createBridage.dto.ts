import { IsArray, IsObject, IsString, ValidateNested } from "class-validator"
import { StrategyCreated } from "passport"
import { Transform, Type } from "class-transformer"
import * as Multer from 'multer';
import { BadRequestException } from "@nestjs/common";
import { CreateRequirementsBrigade } from "./createRequirementBridage";


export class CreateBrigadeDto {
  @IsString()
  name: string
  @IsString()
  description: string
  @IsArray()
  @ValidateNested({ each: true })
  @Transform(({ value }) => {
    if (Array.isArray(value)) {
      return value.map(item => {
        try {
          return typeof item === 'string' ? JSON.parse(item) : item;
        } catch (e) {
        }
      });
    }
    return [];
  })
  @Type(() => CreateRequirementsBrigade)
  requirementsBrigade?: CreateRequirementsBrigade[];
}

export class CreateBrigadeFileDto extends CreateBrigadeDto {
  file: Multer.File | undefined


}
