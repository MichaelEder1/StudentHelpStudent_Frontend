import {Component, OnInit} from '@angular/core';
import {User} from "../../shared/user";
import {UserService} from "../../shared/user-service";
import {UserFactory} from "../../shared/user-factory";
import {DateobjService} from "../../shared/dateobj-service";
import {DateObj} from "../../shared/dateobj";

@Component({
  selector: 'shs-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User = UserFactory.empty();
  studentStuff: DateObj[] = [];
  tutorStuff: DateObj[] = [];
  userId: number = 0;
  roleFlag:string = "Nachhilfe-Suchender";
  constructor(private us: UserService, private ds:DateobjService) {
    this.userId = Number(sessionStorage.getItem("userId"));
  }

  ngOnInit(): void {
    this.us.getUser(this.userId).subscribe(res => this.user = res);
    if(this.user.role) {
      this.roleFlag = "Nachhilfe-Anbieter";
    }
    this.ds.getStudentStuff(this.userId).subscribe(res => this.studentStuff = res);
    this.ds.getTutorStuff(this.userId).subscribe(res => this.tutorStuff = res);
  }

}
