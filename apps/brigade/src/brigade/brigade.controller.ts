import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { BrigadeService } from './brigade.service';
import { CreateBrigadeFileDto } from '@libs/contracts/bridage/createBridage.dto';
import { concatMap } from 'rxjs';

@Controller('bridage')
export class BrigadeController {
  constructor(
    private readonly brigadeService: BrigadeService
  ) { }
  @MessagePattern("brigade.createBrigade")
  async validateUser(data: CreateBrigadeFileDto) {
    return await this.brigadeService.createBrigade(data)
  }

}
