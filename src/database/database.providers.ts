import { DataSource } from 'typeorm';
import configuration from './config/configuration';
const config = configuration();
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mongodb',
        url: config.db_url,
        database: 'test',
        entities: [],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];

