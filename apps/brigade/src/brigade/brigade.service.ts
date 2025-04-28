import { BadRequestException, forwardRef, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { RequirementsBrigadeService } from '../requirements_brigade/requirements_bridage.service';
import { Brigade } from './entity/brigade.entity';
import { CreateBrigadeFileDto } from '@libs/contracts/bridage/createBridage.dto';
import { AwsService } from 'shared/lib/aws/aws.service';

@Injectable()
export class BrigadeService {
  constructor(
    @Inject(forwardRef(() => RequirementsBrigadeService))
    private readonly requirementsBrigadeService: RequirementsBrigadeService,
    @Inject('BRIGADE_REPOSITORY')
    private readonly brigadeRepository: Repository<Brigade>,
    private awsService: AwsService
  ) { }
  async createBrigade(data: CreateBrigadeFileDto) {
    try {
      const { requirementsBrigade, file, ...dataBrigade } = data
      let requirements
      let imgURL
      if (data.file) {
        imgURL = this.awsService.createPhoto(file)
      }
      const brigade = this.brigadeRepository.create({
        ...dataBrigade,
        image: imgURL
      })
      const saveBrigade = await this.brigadeRepository.save(brigade)
      if (requirementsBrigade) {
        requirements = await this.requirementsBrigadeService.createManyRequirementsBrigade(requirementsBrigade, saveBrigade._id.toString())
      }
      const udpateBrigade = await this.findBrigadeById(saveBrigade._id.toString())
      return {
        udpateBrigade,
        requirements
      }
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('An unexpected error occurred');
    }
  }
  async findBrigadeById(id: string) {
    try {
      const brigade = await this.brigadeRepository.findOneBy({ _id: new ObjectId(id) });
      return brigade;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw 'An unexpected error occurred';
    }

  }
}
