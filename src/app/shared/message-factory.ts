import {Message} from "./message";

export class MessageFactory {

  static empty() {
    return new Message(0,0,0,0,0,0,new Date(), "");
  }

  static fromObject(rawOffer: any): Message {
    return new Message(
      rawOffer.id,
      rawOffer.offer_id,
      rawOffer.program_id,
      rawOffer.course_id,
      rawOffer.tutor_id,
      rawOffer.student_id,
      rawOffer.date_time,
      rawOffer.text
    );
  }
}
