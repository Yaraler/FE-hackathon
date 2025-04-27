import { DataSource } from 'typeorm';
import { Bridage } from '../entity/bridage.entity';

export const bridageProviders = [
  {
    provide: 'BRIDAGE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Bridage),
    inject: ['DATA_SOURCE'],
  },
];

