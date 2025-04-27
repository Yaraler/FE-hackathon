import { BadRequestException, forwardRef, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Bridage } from './entity/bridage.entity';
import { MyLoggerService } from '@app/my-logger';
import { CreateBridageDto } from '@libs/contracts/bridage/createBridage.dto';
import { ObjectId } from 'mongodb';
import { RequirementsBridageService } from '../requirements_bridage/requirements_bridage.service';
import { RequirementsBridage } from '../requirements_bridage/entity/requirements-bridage.entity';

@Injectable()
export class BridageService {
  constructor(
    @Inject(forwardRef(() => RequirementsBridageService))
    private readonly requirementsBridageService: RequirementsBridageService,
    @Inject('BRIDAGE_REPOSITORY')
    private readonly bridageRepository: Repository<Bridage>,
  ) { }
  async createBridage(data: CreateBridageDto) {
    try {
      const { requirementsBridage, ...dataBridage } = data
      let requirements: RequirementsBridage[] = [];
      const bridage = this.bridageRepository.create({
        ...dataBridage
      })
      await this.bridageRepository.save(bridage)
      if (requirementsBridage) {
        requirements = await this.requirementsBridageService.createManyRequirementsBridage(requirementsBridage, bridage._id.toString())
      }
      return {
        bridage,
        requirements
      }
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('An unexpected error occurred');
    }
  }
  async findBridageById(id: string) {
    try {
      const bridage = await this.bridageRepository.findOneBy({ _id: new ObjectId(id) });
      return bridage;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('An unexpected error occurred');
    }

  }
}
