import { Controller, Post } from '@nestjs/common';
import { BridageService } from './bridage.service';
import * as Multer from 'multer';

@Controller('bridage')
export class BridageController {
  constructor(private readonly bridageService: BridageService) { }
  @Post("create-bridage")
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'mainImg', maxCount: 1 }], {
      storage: Multer.memoryStorage(),
    }),
  )
  async createBridage(@UploadedFiles() file: { mainImg?: Multer.File },) {
    const mainImg = file?.mainImg ? file : null;
  }
}
