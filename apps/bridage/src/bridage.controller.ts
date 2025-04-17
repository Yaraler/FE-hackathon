import { Controller, Get } from '@nestjs/common';
import { BridageService } from './bridage.service';

@Controller()
export class BridageController {
  constructor(private readonly bridageService: BridageService) {}

  @Get()
  getHello(): string {
    return this.bridageService.getHello();
  }
}
