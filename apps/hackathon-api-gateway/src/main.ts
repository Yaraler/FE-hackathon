import { NestFactory } from '@nestjs/core';
import { HackathonApiGatewayModule } from './hackathon-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(HackathonApiGatewayModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
