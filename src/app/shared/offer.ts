import {Program} from "./program";
import {Course} from "./course";
import {User} from "./user";

export {Course} from "./course";
export {Program} from "./program";
export {User} from "./user";

export class Offer {
  constructor(
    public id: number,
    public title: string,
    public information: string,
    public isAvailable: boolean,
    public course: Course[],
    public program: Program[],
    public user: User[]
  ) {
  }
}
