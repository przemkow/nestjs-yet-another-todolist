import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection({
      type: 'sqlite',
      database: 'todolist.db',
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
      autoSchemaSync: true,
    }),
  },
];