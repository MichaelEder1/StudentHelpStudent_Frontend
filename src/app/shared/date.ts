import {Course, Offer, Program, User} from './offer';

export class DateObj {
  constructor(
    public id: number,
    public offers: Offer[],
    public programs: Program[],
    public courses: Course[],
    public tutors: User[],
    public students: User[],
    public date_time: Date,
    public accepted: boolean
  ) {
  }
}
