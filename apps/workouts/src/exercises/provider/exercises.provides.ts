import { DataSource } from 'typeorm';
import { Exercises } from '../entity/exercises';

export const exercisesProviders = [
  {
    provide: 'EXERCISES',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Exercises),
    inject: ['DATA_SOURCE'],
  },
];


