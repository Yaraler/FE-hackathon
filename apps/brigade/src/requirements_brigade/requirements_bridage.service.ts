import { BadRequestException, forwardRef, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { RequirementsBrigade } from './entity/requirements-brigade.entity';
import { BrigadeService } from '../brigade/brigade.service';
import { Brigade } from '../brigade/entity/brigade.entity';
import { CreateRequirementsBrigade } from '@libs/contracts/bridage/createRequirementBridage';
import { CreateRequirementsBrigadeDto } from '@libs/contracts/bridage/createRequirementsBridage.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class RequirementsBrigadeService {
  constructor(
    @Inject('REQUIREMENT_BRIGADE_REPOSITORY')
    private requirementsBrigadeRestory: Repository<RequirementsBrigade>,
    @Inject(forwardRef(() => BrigadeService))
    private readonly brigadeService: BrigadeService,
    @Inject('BRIGADE_REPOSITORY')
    private brigadeRepository: Repository<Brigade>,
  ) { }
  async createRequirementsBrigade(data: CreateRequirementsBrigade) {
    try {
      const requirements = this.requirementsBrigadeRestory.create({
        ...data,
      });
      const savedRequirements = await this.requirementsBrigadeRestory.save(requirements);
      return savedRequirements;
    } catch (error) {
      console.log(error)
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw 'An unexpected error occurred';
    }
  }
  async getRequirementsByBrigade(objectIdsReq: ObjectId[]) {
    try {
      const requirements = await this.requirementsBrigadeRestory.find({
        where: {
          _id: {
            $in: objectIdsReq,
          }
        }
      })
      return requirements
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('An unexpected error occurred')
    }
  }



  async createManyRequirementsBrigade(data: CreateRequirementsBrigade[]): Promise<string[]> {
    try {

      const requirements = await Promise.all(
        data.map(async (item) => await this.createRequirementsBrigade(item))
      );
      console.log(requirements)
      const requirementsIds = requirements.map((elem) => elem._id.toString())
      console.log(requirementsIds)
      return requirementsIds
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('An unexpected error occurred')
    }
  }

}
