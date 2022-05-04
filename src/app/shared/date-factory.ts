import {DateObj} from './Date'
import {Offer, Program, User} from "./offer";
import {ProgramFactory} from "./program-factory";
import {CourseFactory} from "./course-factory";
import {UserFactory} from "./user-factory";
import {OffersFactory} from "./offers-factory";

export class DateFactory {


  static empty() {
    return new DateObj(0, OffersFactory.empty(), ProgramFactory.empty(), CourseFactory.empty(), UserFactory.empty(), UserFactory.empty(), new Date(), false);
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
