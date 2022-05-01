import {User} from "./user";

export class UserFactory {

  static empty() {
    return new User(0, "", "", 0, "", "", "","","","",1,1,new Date());
  }

  static fromObject(rawUser: any): User {
    return new User(
      rawUser.id,
      rawUser.first_name,
      rawUser.last_name,
      rawUser.age,
      rawUser.photo,
      rawUser.email,
      rawUser.password,
      rawUser.phone_number,
      rawUser.education,
      rawUser.degree,
      rawUser.semester,
      rawUser.role,
      rawUser.created_at,
    );
  }
}
