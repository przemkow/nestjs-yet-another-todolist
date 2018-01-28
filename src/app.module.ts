import { Module } from '@nestjs/common';
import { DatabaseModule } from '../db/database.module';

import { TodoModule } from './todo/todo.module';

@Module({
  imports: [DatabaseModule, TodoModule],
})
export class ApplicationModule {}
