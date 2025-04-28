import { BadRequestException, forwardRef, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RequirementsBrigade } from './entity/requirements-brigade.entity';
import { BrigadeService } from '../brigade/brigade.service';
import { Brigade } from '../brigade/entity/brigade.entity';
import { CreateRequirementsBrigade } from '@libs/contracts/bridage/createRequirementBridage';
import { CreateRequirementsBrigadeDto } from '@libs/contracts/bridage/createRequirementsBridage.dto';

@Injectable()
export class RequirementsBrigadeService {
  constructor(
    @Inject('REQUIREMENT_BRIGADE_REPOSITORY')
    private requirementsBrigade: Repository<RequirementsBrigade>,
    @Inject(forwardRef(() => BrigadeService))
    private readonly brigadeService: BrigadeService,
    @Inject('BRIGADE_REPOSITORY')
    private brigadeRepository: Repository<Brigade>,
  ) { }
  async createRequirementsBrigade(data: CreateRequirementsBrigade, id: string) {
    try {
      const brigade = await this.brigadeService.findBrigadeById(id)
      if (!brigade) {
        throw new BadRequestException('Brigade with the specified ID was not found.');
      }
      const requirements = this.requirementsBrigade.create({
        ...data,
        brigadeId: brigade._id.toString()
      });
      const savedRequirements = await this.requirementsBrigade.save(requirements);



      return { savedRequirements };
    } catch (error) {
      console.log(error)

      if (error instanceof BadRequestException) {
        throw error;
      }
      throw 'An unexpected error occurred';
    }

  }
  async createOneRequirementsBrigade(data: CreateRequirementsBrigadeDto) {
    try {
      const { id, ...requirements } = data

      await this.createRequirementsBrigade(requirements, id);

      return "a"
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('An unexpected error occurred')
    }
  }
  async createManyRequirementsBrigade(data: CreateRequirementsBrigade[], id: string) {
    try {

      const requirements = await Promise.all(
        data.map(async (item) => await this.createRequirementsBrigade(item, id))
      );
      const brigade = await this.brigadeService.findBrigadeById(id)
      if (!brigade) {
        throw new BadRequestException('Brigade with the specified ID was not found.');
      }
      return requirements
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('An unexpected error occurred')
    }
  }
}
