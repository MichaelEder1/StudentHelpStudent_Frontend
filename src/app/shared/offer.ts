import {User} from "./user";
import {DateObj} from "./dateobj";

export {User} from "./user";

export class Offer {
  constructor(
    public id: number,
    public title: string,
    public information: string,
    public isAvailable: boolean,
    public course_id: number,
    public program_id: number,
    public userId: number,
    public dates: DateObj[],
  ) {
  }
}
