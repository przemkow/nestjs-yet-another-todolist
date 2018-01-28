import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { TodoDto } from './todo.dto';
import { Res } from '@nestjs/common/utils/decorators/route-params.decorator';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  /*
   * Server side rendering
   */
  @Get()
  async findAll(@Res() res) {
    const todos = await this.todoService.findAll();
    res.render('todo/index', { todos });
  }
  /*
   * JSON
   */
  // @Get()
  // findAll(): Promise<Todo[]> {
  //   return this.todoService.findAll();
  // }

  @Get('new')
  new(@Res() res) {
    res.render('todo/new');
  }

  @Get(':id')
  async findOne(@Res() res, @Param() params) {
    const todo = await this.todoService.findById(params.id);
    res.render('todo/show', { todo });
  }

  @Get(':id/edit')
  async edit(@Res() res, @Param() params) {
    const todo = await this.todoService.findById(params.id);
    res.render('todo/edit', { todo });
  }

  @Post()
  async create(@Res() res, @Body() todoParams: TodoDto) {
    await this.todoService.create(todoParams);
    res.redirect('/todo');
  }

  @Post(':id')
  async update(@Res() res, @Param() params, @Body() todoParams: TodoDto) {
    const todoParamsSerialised = {
      ...todoParams,
    };
    todoParamsSerialised.isFinished = Boolean(todoParamsSerialised.isFinished);
    await this.todoService.edit(params.id, todoParamsSerialised);
    res.redirect('/todo');
  }
}