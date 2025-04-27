import { Controller } from '@nestjs/common';
import { BridageService } from './bridage.service';

@Controller('bridage')
export class BridageController {
  constructor(
    private readonly bridageService: BridageService
  ) { }
}
