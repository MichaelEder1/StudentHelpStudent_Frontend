import {Program} from "./program";

export class ProgramFactory {
  static empty(): Program {
    return new Program(0, "");
  }

  static fromObject(rawProgram: any): Program {
    return new Program(rawProgram.id, rawProgram.program_name);
  }
}
