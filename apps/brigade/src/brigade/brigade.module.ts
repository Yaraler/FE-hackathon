import { forwardRef, Module } from '@nestjs/common';
import { MyLoggerModule } from '@app/my-logger';
import { DatabaseModule } from '@libs/database/src';
import { RequirementsBrigadeModule } from '../requirements_brigade/requirements_bridage.module';
import { BrigadeController } from './brigade.controller';
import { BrigadeService } from './brigade.service';
import { requirementsBrigadeProviders } from '../requirements_brigade/provider/requirements-brigade';
import { brigadeProviders } from './provides/brigade';
import { AwsService } from 'shared/lib/aws/aws.service';
import { AwsModule } from 'shared/lib/aws/aws.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import awsConfig from '@libs/config/aws.config';
@Module({
  imports: [
    DatabaseModule,
    MyLoggerModule,
    AwsModule,
    forwardRef(() => RequirementsBrigadeModule),
    ConfigModule.forRoot({
      load: [awsConfig],
    }),
  ],
  controllers: [BrigadeController],
  providers: [BrigadeService, ConfigService, ...brigadeProviders, ...requirementsBrigadeProviders, AwsService],
  exports: [BrigadeService, ...brigadeProviders],
})
export class BrigadeModule { }
