import { Injectable } from '@nestjs/common';

@Injectable()
export class BridageService {
  getHello(): string {
    return 'Hello World!';
  }
}
