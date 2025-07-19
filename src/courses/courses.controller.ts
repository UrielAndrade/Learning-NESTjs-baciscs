import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(){
    return 'listagem de cursos';
  }
  @Get(':id')
  findOne(@Param() params) {
    return `Curso com ID ${params.id}`;
  }
}
