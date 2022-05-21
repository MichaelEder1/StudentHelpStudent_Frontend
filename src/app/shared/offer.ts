import {Program} from "./program";
import {Course} from "./course";
import {User} from "./user";
import {DateObj} from "./dateobj";

export {Course} from "./course";
export {Program} from "./program";
export {User} from "./user";

export class Offer {
  constructor(
    public id: number,
    public title: string,
    public information: string,
    public isAvailable: boolean,
    public course: Course,
    public program: Program,
    public userId: number,
    public dateObjs: DateObj[],
  ) {
  }
}
