import {Course, Offer, Program, User} from './offer';

export class DateObj {
  constructor(
    public id: number,
    public offers_id: number,
    public programs_id: number,
    public courses_id: number,
    public tutors_id: number,
    public students_id: number,
    public date_time: Date,
    public accepted: boolean
  ) {
  }
}
