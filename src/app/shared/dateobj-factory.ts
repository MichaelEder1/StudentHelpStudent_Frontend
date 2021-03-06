import {DateObj} from './dateobj';

export class DateobjFactory {
  static empty() {
    return new DateObj(0, 0, 0, 0, 0, 0, new Date(), false);
  }

  static fromObject(rawDate: any): DateObj {
    return new DateObj(rawDate.id, rawDate.offers_id, rawDate.programs_id, rawDate.courses_id, rawDate.tutors_id, rawDate.students_id, rawDate.date_time, rawDate.accepted);
  }
}
