import { DataSource } from 'typeorm';
import configuration from './config/configuration';
import { Bridage } from 'apps/bridage/src/bridage/entity/bridage.entity';
import { DailyWorkouts } from 'apps/workouts/src/daily-workouts/entity/daily-workouts.entity';
import { User } from 'apps/users/src/user/entity/user.entity';
const config = configuration();
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mongodb',
        url: config.db_url,
        database: 'test',
        entities: [User, Bridage, DailyWorkouts],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];

