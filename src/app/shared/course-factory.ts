import {Course} from "./course";

export class CourseFactory {

  static empty() {
    return new Course(0, "", "", "", "", 1, []);
  }

  static fromObject(rawCourse: any): Course {
    return new Course(
      rawCourse.id,
      rawCourse.course_name,
      rawCourse.code,
      rawCourse.image,
      rawCourse.description,
      rawCourse.semester,
      rawCourse.program
    );
  }
}
