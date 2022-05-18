import {Component, OnInit} from '@angular/core';
import {User} from "../../shared/user";
import {UserService} from "../../shared/user-service";
import {UserFactory} from "../../shared/user-factory";
import {DateobjService} from "../../shared/dateobj-service";
import {DateObj} from "../../shared/dateobj";
import {Course} from "../../shared/course";
import {Program} from "../../shared/program";
import {Offer} from "../../shared/offer";
import {ProgramService} from "../../shared/program-service";
import {CourseService} from "../../shared/course-service";
import {OfferService} from "../../shared/offer-service";
import {OffersFactory} from "../../shared/offers-factory";
import {ProgramFactory} from "../../shared/program-factory";
import {CourseFactory} from "../../shared/course-factory";

@Component({
  selector: 'shs-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User = UserFactory.empty();
  studentStuff: DateObj[] = [];
  tutorStuff: DateObj[] = [];
  courses: Course[] = [];
  programs: Program[] = [];
  offers: Offer[] = [];
  userId: number = 0;
  roleFlag: string = "Nachhilfe-Suchender";

  constructor(private us: UserService, private ds: DateobjService, private os: OfferService, private ps: ProgramService, private cs: CourseService) {
    this.userId = Number(sessionStorage.getItem("userId"));
  }

  ngOnInit(): void {
    this.us.getUser(this.userId).subscribe(res => this.user = res);
    if (this.user.role) {
      this.roleFlag = "Nachhilfe-Anbieter";
    }
    this.ds.getStudentStuff(this.userId).subscribe(res => {
      this.studentStuff = res;
      this.cs.getAll().subscribe(res1 => this.courses = res1);
      this.os.getAll().subscribe(res2 => this.offers = res2);
      this.ps.getAll().subscribe(res2 => this.programs = res2);
    });
    this.ds.getTutorStuff(this.userId).subscribe(res => this.tutorStuff = res);
  }

  getCourse(id:number){
    for (let course of this.courses) {
      if(course.id == id) return course;
    }
    return CourseFactory.empty();
  }

  getProgram(id:number){
    for (let program of this.programs) {
      if(program.id == id) return program;
    }
    return ProgramFactory.empty();
  }

  getOffer(id:number){
    for (let offer of this.offers) {
      if(offer.id == id) return offer;
    }
    return OffersFactory.empty();
  }

}
