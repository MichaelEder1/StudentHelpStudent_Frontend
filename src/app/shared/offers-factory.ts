import {Offer} from "./offer";

export class OffersFactory {

  static empty() {
    return new Offer(0, "", "", true, [], [], []);
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
