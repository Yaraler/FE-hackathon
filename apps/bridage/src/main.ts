import { NestFactory } from '@nestjs/core';
import { BridageModule } from './bridage.module';

async function bootstrap() {
  const app = await NestFactory.create(BridageModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
