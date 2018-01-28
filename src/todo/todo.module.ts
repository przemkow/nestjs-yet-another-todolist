import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../db/database.module';
import { TodoProviders } from './todo.providers';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
  imports: [DatabaseModule],
  components: [
    ...TodoProviders,
    TodoService,
  ],
  controllers: [
    TodoController,
  ],
})
export class TodoModule {}