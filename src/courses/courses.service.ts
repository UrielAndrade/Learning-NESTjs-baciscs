import { Injectable } from '@nestjs/common';
import { Course } from 'src/courses/courses.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'NestJS',
      description: 'Curso de NestJS',
      tags: ['node', 'backend', 'framework', 'nestjs', 'typescript'],
    },
    {
      id: 2,
      name: 'Angular',
      description: 'Curso de Angular',
      tags: ['frontend', 'framework', 'typescript', 'angular'],
    },
  ];

  findAll() {
    return this.courses;
  }
  //
  findOne(id: number) {
    return this.courses.find((curso) => curso.id === id);
  }
  //
  create(createCourseDTO: any) {
    this.courses.push(createCourseDTO);
  }
  //
  update(id: number, updateCourseDTO: any) {
    const existongCourse = this.findOne(id);
    if (existongCourse) {
      const index = this.courses.findIndex((course) => course.id === id);
      this.courses[index] = { id, ...updateCourseDTO };
    } else {
      throw new Error('Curso não encontrado');
    }
    //
  }
  remove(id: number) {
    const index = this.courses.findIndex((course) => course.id === id);
    if (index >= 0) {
      this.courses.splice(index, 1);
    } else {
      throw new Error('Curso não encontrado');
    }
  }
}
