import { BadRequestException, forwardRef, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { MongoRepository, Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { RequirementsBrigadeService } from '../requirements_brigade/requirements_bridage.service';
import { Brigade } from './entity/brigade.entity';
import { CreateBrigadeFileDto } from '@libs/contracts/bridage/createBridage.dto';
import { AwsService } from 'shared/lib/aws/aws.service';
import { RequirementsBrigade } from '../requirements_brigade/entity/requirements-brigade.entity';
import { error } from 'console';
import { IBrigadeResponse } from '@libs/contracts/bridage/responseBrigade';

@Injectable()
export class BrigadeService {
  constructor(
    @Inject(forwardRef(() => RequirementsBrigadeService))
    private readonly requirementsBrigadeService: RequirementsBrigadeService,
    @Inject('BRIGADE_REPOSITORY')
    private readonly brigadeRepository: MongoRepository<Brigade>,
    private awsService: AwsService
  ) { }
  async createBrigade(data: CreateBrigadeFileDto) {
    try {
      const { requirementsBrigade, file, ...dataBrigade } = data
      let requirements: RequirementsBrigade[] = []
      let imgURL: string | undefined
      if (data.file) {
        imgURL = await this.awsService.createPhoto(file)
      }
      console.log(imgURL)
      const brigade = this.brigadeRepository.create({
        ...dataBrigade,
        image: imgURL,
        requirementsBrigadeIds: []
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
  async addRequirementRelation(brigadId: string, requirementsId: ObjectId) {
    try {
      const brigade = await this.findBrigadeById(brigadId)
      if (!brigade) {
        return
      }
      brigade?.requirementsBrigadeIds.push(requirementsId.toString())
      await this.brigadeRepository.save(brigade)
      return
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('An unexpected error occurred')
    }

  }
  async getBrigade() {
    try {
      return this.brigadeRepository.aggregate([
        {
          $lookup: {
            from: "requirements-brigade",
            localField: "requirementsBrigadeIds",
            foreignField: "_id",
            as: "requirements"
          }
        }
      ]).toArray();
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('An unexpected error occurred')
    }
  }
  async getOneBrigade(brigadeId: string): Promise<any> {
    try {
      const brigadeRepository = this.brigadeRepository;

      return brigadeRepository.aggregate([
        {
          $match: {
            _id: brigadeId
          }
        },
        {
          $lookup: {
            from: "requirements-brigade",
            localField: "requirementsBrigadeIds",
            foreignField: "_id",
            as: "requirements"
          }
        }
      ])

    } catch (error) {
      throw error;
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
