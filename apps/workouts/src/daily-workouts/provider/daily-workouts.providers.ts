import { DataSource } from 'typeorm';
import { DailyWorkouts } from '../entity/daily-workouts.entity';

export const dailyWorkoutsProviders = [
  {
    provide: 'DAILY_WORKOUTS',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(DailyWorkouts),
    inject: ['DATA_SOURCE'],
  },
];

