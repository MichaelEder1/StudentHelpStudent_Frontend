export class User {
  constructor(
    public id: number,
    public first_name: string,
    public last_name: string,
    public age: number,
    public mail: string,
    public password: string,
    public phone_number: string,
    public education: string,
    public degree: string,
    public semester: number,
    public role: number,
    public photo?: string,
  ) {
  }
}
