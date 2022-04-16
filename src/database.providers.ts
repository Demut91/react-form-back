import { join } from 'path';
import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'app',
      password: 'nkTm8ucw4b',
      database: 'myapp',
      entities: [ join(__dirname, '**', '*.model.{ts,js}')],
      synchronize: true
    }),
  },
];