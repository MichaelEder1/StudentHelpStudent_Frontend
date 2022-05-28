import {Offer, User} from "./offer";
import {ProgramFactory} from "./program-factory";
import {CourseFactory} from "./course-factory";
import {DateobjFactory} from "./dateobj-factory";

export class OffersFactory {

  static empty() {
    return new Offer(0, "", "", true, 0, 0, 0, [DateobjFactory.empty()]);
  }

  static fromObject(rawOffer: any): Offer {
    return new Offer(
      rawOffer.id,
      rawOffer.title,
      rawOffer.information,
      rawOffer.isAvailable,
      rawOffer.course,
      rawOffer.program,
      rawOffer.userId,
      rawOffer.dateObjs
    );
  }
}
