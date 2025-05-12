import { Test, TestingModule } from "@nestjs/testing";
import { BrigadeService } from "./brigade.service";
import { brigadeProviders } from "./provider/brigade";
import { AwsService } from "@aws/aws.service";
import { MongoRepository } from "typeorm";
import { Brigade } from "./entity/brigade.entity";
import { testBrigade } from "../../../../tests/fixtures/brigade.fixture";
import { RequirementsBrigade } from "../requirements_brigade/entity/requirements-brigade.entity";
import { RequirementsBrigadeService } from "../requirements_brigade/requirements_bridage.service";





const requirementsBrigadeMock = {}
const awsMock = {
  createPhoto: jest.fn().mockResolvedValue("mocked-photo-url"),
};
describe('UserService', () => {
  let service: BrigadeService
  let db: MongoRepository<Brigade>
  let aws: AwsService
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BrigadeService,
        {
          provide: 'BRIGADE_REPOSITORY',
          useValue: {
            find: jest.fn().mockResolvedValue(testBrigade),
          },
        },
        {
          provide: AwsService,
          useValue: awsMock,
        },
        {
          provide: RequirementsBrigadeService,
          useValue: requirementsBrigadeMock
        }
      ]
    }).compile();
    service = module.get<BrigadeService>(BrigadeService)
    db = module.get<MongoRepository<Brigade>>('BRIGADE_REPOSITORY')
    aws = module.get<AwsService>(AwsService);
  })


  describe("get all brigade", () => {
    it("should return all brigade", async () => {
      const result = await service.getAllBrigade();
      expect(result).toEqual(testBrigade)
    })
  })
})

