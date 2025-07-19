import { Controller, Get, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(){
    return 'listagem de cursos';
  }
}
