import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import * as Multer from 'multer';
import { CreateBrigadeDto, CreateBrigadeFileDto } from '@libs/contracts/bridage/createBridage.dto';

@Injectable()
export class BrigadeService {
  constructor(@Inject("BRIGADE_SERVICE") private brigadeClient: ClientProxy) { }
  async createBrigade(data: CreateBrigadeDto, file: Multer.File | undefined) {
    const payload: CreateBrigadeFileDto = {
      file,
      ...data
    }
    return await firstValueFrom(this.brigadeClient.send("brigade.createBrigade", payload))
  }
}
