import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { CoursesService } from "src/courses/courses.service";

@Controller("courses")
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}
  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.coursesService.findOne(id);
  }

  @Post()
  create(@Body() body) {
    return this.coursesService.create(body);
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() body) {
    return this.coursesService.update(id, body);
  }

  @HttpCode(HttpStatus.BAD_GATEWAY)
  @Delete(":id")
  remove(@Param("id") id: number) {
    try {
      this.coursesService.remove(id);
      return { message: `Curso com ID ${id} removido com sucesso` };
    } catch (error) {
      return { message: error.message };
    }
  }
}
