import { DataSource } from 'typeorm';
import { RequirementsBrigade } from '../entity/requirements-brigade.entity';

export const requirementsBrigadeProviders = [
  {
    provide: 'REQUIREMENT_BRIGADE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(RequirementsBrigade),
    inject: ['DATA_SOURCE'],
  },
];

