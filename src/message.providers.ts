import { Connection } from 'typeorm';
import { Message } from './message.model';

export const messageProviders = [
  {
    provide: 'MESSAGE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Message),
    inject: ['DATABASE_CONNECTION'],
  },
];