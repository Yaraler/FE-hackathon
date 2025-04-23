import { NestFactory } from '@nestjs/core';
import { BridageModule } from './bridage.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RpcHttpExceptionFilter } from '@app/filter';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(BridageModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5674'],
      queue: 'bridage_queue',
      queueOptions: {
        durable: false
      },
    },
  });
  app.useGlobalFilters(new RpcHttpExceptionFilter());
  await app.listen();
}
bootstrap();
