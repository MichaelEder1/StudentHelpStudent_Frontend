export class DateObj {
  constructor(
    public id: number,
    public offer_id: number,
    public program_id: number,
    public course_id: number,
    public tutor_id: number,
    public student_id: number,
    public date_time: Date,
    public accepted: boolean
  ) {
  }
}
