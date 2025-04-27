import { MyLoggerService } from '@app/my-logger';
import { BadRequestException, forwardRef, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { User } from 'apps/users/src/user/entity/user.entity';
import { Repository } from 'typeorm';
import { Bridage } from '../bridage/entity/bridage.entity';
import { RequirementsBridage } from './entity/requirements-bridage.entity';
import { CreateRequirementsBridage } from '@libs/contracts/bridage/createRequirementBridage';
import { BridageService } from '../bridage/bridage.service';
import { CreateRequirementsBridageDto } from '@libs/contracts/bridage/createRequirementsBridage.dto';

@Injectable()
export class RequirementsBridageService {
  constructor(
    @Inject('REQUIREMENT_BRIDAGE_REPOSITORY')
    private requirementsBridage: Repository<RequirementsBridage>,
    @Inject(forwardRef(() => BridageService))
    private readonly bridageService: BridageService,
  ) { }
  async createRequirementsBridage(data: CreateRequirementsBridage, bridage: Bridage) {
    try {
      const requirements = this.requirementsBridage.create({
        ...data,
        bridage
      });

      return await this.requirementsBridage.save(requirements);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('An unexpected error occurred');
    }

  }
  async createOneRequirementsBridage(data: CreateRequirementsBridageDto) {
    try {
      const { id, ...requirements } = data
      const bridage = await this.bridageService.findBridageById(id)
      if (!bridage) {
        throw new BadRequestException('Brigade with the specified ID was not found.');
      }
      await this.createRequirementsBridage(requirements, bridage);
      return bridage
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('An unexpected error occurred')
    }
  }
  async createManyRequirementsBridage(data: CreateRequirementsBridage[], id: string) {
    try {
      const bridage = await this.bridageService.findBridageById(id)
      if (!bridage) {
        throw new BadRequestException('Brigade with the specified ID was not found.');
      }
      const requirements = await Promise.all(
        data.map(async (item) => await this.createRequirementsBridage(item, bridage))
      );
      return requirements
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('An unexpected error occurred')
    }
  }
}
