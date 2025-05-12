import { BadRequestException, forwardRef, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { MongoRepository, Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { RequirementsBrigadeService } from '../requirements_brigade/requirements_bridage.service';
import { Brigade } from './entity/brigade.entity';
import { CreateBrigadeFileDto } from '@libs/contracts/bridage/createBridage.dto';
import { RequirementsBrigade } from '../requirements_brigade/entity/requirements-brigade.entity';
import { AwsService } from '@aws/aws.service';

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


      const { requirementsBrigade, shortName, file, name, description } = data
      const transformedRequirements = requirementsBrigade.map((elem, index) => (
        new RequirementsBrigade(elem.exercise, elem?.minimum, elem?.maximum)
      ))
      let imgURL: string | undefined
      if (file) {
        imgURL = await this.awsService.createPhoto(file)
      }

      console.log(transformedRequirements)
      const brigade = new Brigade()
      brigade.shortName = shortName
      brigade.name = name
      brigade.description = description
      brigade.image = imgURL
      brigade.requirementsBrigade = transformedRequirements

      const saveBrigade = await this.brigadeRepository.save(brigade);
      return { brigade: saveBrigade };
    } catch (error) {
      console.error(error)
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('An unexpected error occurred');
    }
  }
  async getAllBrigade(): Promise<Brigade[]> {
    try {
      const brigades = await this.brigadeRepository.find();

      return brigades;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('An unexpected error occurred')
    }
  }
  async getOneBrigade(brigadeId: string): Promise<any> {
    try {
      //      const brigadeRepository = this.brigadeRepository;
      //      const brigade = await brigadeRepository.findOneBy({
      //        _id: new ObjectId(brigadeId)
      //      });
      //      if (!brigade) {
      //        return null;
      //      }
      //
      //      if (!brigade.requirementsBrigadeIds?.length) {
      //        return { ...brigade, requirements: [] };
      //      }
      //
      //      const objectIdsReq = brigade.requirementsBrigadeIds.map(i => new ObjectId(i)) as ObjectId[]
      //      const requirements = await this.requirementsBrigadeService.getRequirementsByBrigade(objectIdsReq)
      //      return {
      //        ...brigade,
      //        requirements: requirements
      //      };
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
