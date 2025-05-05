import { BadRequestException, forwardRef, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { MongoRepository, Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { RequirementsBrigadeService } from '../requirements_brigade/requirements_bridage.service';
import { Brigade } from './entity/brigade.entity';
import { CreateBrigadeFileDto } from '@libs/contracts/bridage/createBridage.dto';
import { AwsService } from 'shared/lib/aws/aws.service';
import { RequirementsBrigade } from '../requirements_brigade/entity/requirements-brigade.entity';

@Injectable()
export class BrigadeService {
  constructor(
    @Inject('REQUIREMENT_BRIGADE_REPOSITORY')
    private requirementsBrigadeRestory: Repository<RequirementsBrigade>,

    @Inject(forwardRef(() => RequirementsBrigadeService))
    private readonly requirementsBrigadeService: RequirementsBrigadeService,
    @Inject('BRIGADE_REPOSITORY')
    private readonly brigadeRepository: MongoRepository<Brigade>,
    private awsService: AwsService
  ) { }
  async createBrigade(data: CreateBrigadeFileDto) {
    try {
      const { requirementsBrigade, shortName, file, ...dataBrigade } = data
      let requirements: RequirementsBrigade[] = []
      let imgURL: string | undefined
      if (data.file) {
        imgURL = await this.awsService.createPhoto(file)
      }
      const brigade = this.brigadeRepository.create({
        ...dataBrigade,
        image: imgURL,
        shortName: shortName,
        requirementsBrigadeIds: []
      })
      if (requirementsBrigade) {
        brigade.requirementsBrigadeIds = await this.requirementsBrigadeService.createManyRequirementsBrigade(requirementsBrigade)

      }
      console.log("work")
      const saveBrigade = await this.brigadeRepository.save(brigade)

      return {
        saveBrigade,
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
      const brigades = await this.brigadeRepository.find();

      const brigadesWithRequirements = await Promise.all(
        brigades.map(async (brigade) => {
          const requirementIds = brigade.requirementsBrigadeIds.map(id => new ObjectId(id))
          const requirements = await this.requirementsBrigadeRestory.find({
            where: {
              _id: {
                $in: requirementIds
              }
            }
          });

          return {
            ...brigade,
            requirements,
          };
        })
      );

      return brigadesWithRequirements;
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
      const brigade = await brigadeRepository.findOneBy({
        _id: new ObjectId(brigadeId)
      });
      if (!brigade) {
        return null;
      }

      if (!brigade.requirementsBrigadeIds?.length) {
        return { ...brigade, requirements: [] };
      }

      const objectIdsReq = brigade.requirementsBrigadeIds.map(i => new ObjectId(i)) as ObjectId[]
      const requirements = await this.requirementsBrigadeService.getRequirementsByBrigade(objectIdsReq)
      return {
        ...brigade,
        requirements: requirements
      };
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
