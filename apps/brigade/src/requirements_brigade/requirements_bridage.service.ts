import { BadRequestException, forwardRef, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { RequirementsBrigade } from './entity/requirements-brigade.entity';
import { BrigadeService } from '../brigade/brigade.service';
import { Brigade } from '../brigade/entity/brigade.entity';
import { CreateRequirementsBrigade } from '@libs/contracts/bridage/createRequirementBridage';

@Injectable()
export class RequirementsBrigadeService {
  constructor(
    @Inject('REQUIREMENT_BRIGADE_REPOSITORY')
    private requirementsBrigadeRestory: Repository<RequirementsBrigade>,
  ) { }
  async transformRequirementsBrigade(requirementsBrigade: CreateRequirementsBrigade[]
  ): Promise<RequirementsBrigade[]> {
    try {
      const transformedRequirements = requirementsBrigade.map((elem, index) => (
        new RequirementsBrigade(elem.exercise, elem?.minimum, elem?.maximum)
      ))

      return transformedRequirements;
    } catch (error) {
      console.log(error)
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw 'An unexpected error occurred';
    }
  }
}
