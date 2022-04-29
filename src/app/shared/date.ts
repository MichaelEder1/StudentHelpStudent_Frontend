import {Course, Offer, Program, User} from './offer';

export class Date {
  constructor(
    public id: number,
    public offers: Offer[],
    public programs: Program[],
    public courses: Course[],
    public tutors: User[],
    public students: User[],
    public date_time: any,
    public accepted: boolean
  ) {
  }
}
