import { NestFactory } from '@nestjs/core';
import { BrigadeModuleApp } from './brigade.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RpcHttpExceptionFilter } from '@app/filter';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(BrigadeModuleApp, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'brigade_queue',
      queueOptions: {
        durable: false
      },
    },
  });
  app.useGlobalFilters(new RpcHttpExceptionFilter());
  await app.listen();
}
bootstrap();
