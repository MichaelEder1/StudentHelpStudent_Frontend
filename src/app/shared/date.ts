import {Course, Offer, Program, User} from './offer';

export class Date {
  constructor(
    public id: number,
    public offer: Offer[],
    public program: Program[],
    public course: Course[],
    public tutor: User[],
    public student: [],
    public date_time: any,
    public accepted: boolean
  ) {
  }
}
