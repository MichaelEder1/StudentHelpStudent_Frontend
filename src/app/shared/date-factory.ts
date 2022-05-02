import {DateObj} from './Date'

export class DateFactory {


  static empty() {
    return new DateObj(0, [], [], [], [], [], new Date(), false);
  }

  static fromObject(rawDate: any): DateObj {
    return new DateObj(
      rawDate.id,
      rawDate.offers,
      rawDate.programs,
      rawDate.courses,
      rawDate.tutors,
      rawDate.students,
      rawDate.date_time,
      rawDate.accepted
    );
  }
}
