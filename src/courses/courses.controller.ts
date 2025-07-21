import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { CoursesService } from 'src/courses/courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}
  @Get()
  findAll(@Res() response) {
    return response.status(200).json({ message: 'Lista de cursos' });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso com ID ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    console.log(body);
    return `Atualizar o curso com ID ${id}`;
  }

  @HttpCode(HttpStatus.BAD_GATEWAY)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Remover o curso com ID ${id}`;
  }
}
