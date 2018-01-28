import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { TodoDto } from './todo.dto';

@Component()
export class TodoService {
  constructor(
    @Inject('TodoRepositoryToken') private readonly todoRepository: Repository<Todo>) {}

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async findById(id: number): Promise<Todo> {
    return await this.todoRepository.findOneById(id);
  }

  async create(todoParams: TodoDto): Promise<Todo> {
    const newTodo =  this.todoRepository.create(todoParams);
    return await this.todoRepository.save(newTodo);
  }

  async edit(id: number, todoParams: TodoDto): Promise<Todo> {
    await this.todoRepository.updateById(id, todoParams);
    return await this.todoRepository.findOneById(id);
  }
}