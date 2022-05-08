import {Program} from "./program";

export class Course {
  constructor(
    public id: number,
    public course_name: string,
    public code: string,
    public image: string,
    public description: string,
    public semester: number,
    public programs: Program[],
) {
  }
}
