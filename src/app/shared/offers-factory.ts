import {Offer, Program} from "./offer";
import {ProgramFactory} from "./program-factory";
import {CourseFactory} from "./course-factory";

export class OffersFactory {

  static empty() {
    return new Offer(0, "", "", true, CourseFactory.empty(), ProgramFactory.empty(), []);
  }

  static fromObject(rawOffer: any): Offer {
    return new Offer(
      rawOffer.id,
      rawOffer.title,
      rawOffer.information,
      rawOffer.isAvailable,
      rawOffer.course,
      rawOffer.program,
      rawOffer.user
    );
  }
}
