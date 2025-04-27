import { DataSource } from 'typeorm';
import { RequirementsBridage } from '../entity/requirements-bridage.entity';

export const requirementsBridageProviders = [
  {
    provide: 'REQUIREMENT_BRIDAGE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(RequirementsBridage),
    inject: ['DATA_SOURCE'],
  },
];


