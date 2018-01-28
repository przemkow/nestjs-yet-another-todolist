import { Connection } from 'typeorm';
import { Todo } from './todo.entity';

export const TodoProviders = [
  {
    provide: 'TodoRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Todo),
    inject: ['DbConnectionToken'],
  },
];