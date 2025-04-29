import { DataSource } from 'typeorm';
import { Brigade } from '../entity/brigade.entity';

export const brigadeProviders = [
  {
    provide: 'BRIGADE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getMongoRepository(Brigade),
    inject: ['DATA_SOURCE'],
  },
];

