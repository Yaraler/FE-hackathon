import { Test, TestingModule } from "@nestjs/testing";
import { BrigadeService } from "./brigade.service";
import { brigadeProviders } from "./provider/brigade";
import { AwsService } from "@aws/aws.service";




const mockBrigadeProvider = {
  provide: 'BrigadeRepository',
  useValue: {
    findAll: jest.fn().mockResolvedValue([]),
  },
};
const aws = {
  createPhoto: jest.fn().mockResolvedValue("mocked-photo-url"),
};
describe('UserService', () => {
  let service: BrigadeService
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BrigadeService,
        ...brigadeProviders.map(provider => ({
          provide: provider.provide,
          useValue: mockBrigadeProvider,
        })),
        {
          provide: AwsService,
          useValue: aws,
        }
      ]
    }).compile();


  })
})

