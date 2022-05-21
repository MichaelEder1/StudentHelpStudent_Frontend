import {Component, OnInit} from '@angular/core';
import {DateobjService} from "../../../shared/dateobj-service";
import {ActivatedRoute, Router} from "@angular/router";
import {DateObj} from "../../../shared/dateobj";
import {UserService} from "../../../shared/user-service";
import {User} from "../../../shared/user";
import {UserFactory} from "../../../shared/user-factory";
import {AuthenticationService} from "../../../shared/authentification.service";
import {OfferService} from "../../../shared/offer-service";
import {ToastrService} from "ngx-toastr";
import {DateobjFactory} from "../../../shared/dateobj-factory";
import {Course, Offer, Program} from "../../../shared/offer";
import {OffersFactory} from "../../../shared/offers-factory";
import {CourseService} from "../../../shared/course-service";
import {CourseFactory} from "../../../shared/course-factory";
import {ProgramService} from "../../../shared/program-service";
import {ProgramFactory} from "../../../shared/program-factory";

@Component({
  selector: 'shs-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss']
})
export class OfferDetailComponent implements OnInit {

  dates: DateObj[] = [];
  offer: Offer = OffersFactory.empty();
  course: Course = CourseFactory.empty();
  program: Program = ProgramFactory.empty();
  tutor: User = UserFactory.empty();
  student: User = UserFactory.empty();
  offerId: number = 0;
  userId: number = 0;

  constructor(private ds: DateobjService, private route: ActivatedRoute, private router: Router, private us: UserService, private os: OfferService, private cs: CourseService, private ps: ProgramService, public auth: AuthenticationService, private toastr: ToastrService,) {
    this.offerId = route.snapshot.params['id'];
    this.userId = Number(sessionStorage.getItem("userId"));
  }

  ngOnInit(): void {
    this.ds.getDatesForOffer(this.offerId).subscribe(res => {
      this.dates = res;
      this.cs.getSingle(this.dates[0].course_id).subscribe(res1 => this.course = res1);
      this.ps.getSingleById(this.dates[0].program_id).subscribe(res2 => this.program = res2);
      this.os.getSingle(this.offerId).subscribe(res3 => this.offer = res3);
      this.us.getUser(this.dates[0].tutor_id).subscribe(res4 => this.tutor = res4);
      this.us.getUser(this.userId).subscribe(res5 => this.student = res5);
    });
    window.setTimeout(() =>
      console.log(this.offer.id), 500);
  }

  getDate(date: Date) {
    return this.ds.getDate(date);
  }

  removeOffer() {
    this.os.remove(this.offerId).subscribe(res => this.router.navigate(['../'], {relativeTo: this.route}));
    this.toastr.success("Das Angebot wurde gelöscht!");
  }

  removeDate(id: number) {
    this.ds.remove(id).subscribe(res => this.router.navigate(['../'], {relativeTo: this.route}));
    this.toastr.success("Der Termin wurde gelöscht!");
  }

  isInFuture(dateTime: Date): Boolean {
    return (this.getDate(dateTime) >= new Date());
  }

  book(date: DateObj) {
    const newDate: DateObj = DateobjFactory.fromObject(date);
    newDate.student_id = this.userId;
    this.ds.update(newDate).subscribe(res => {
      this.toastr.success("Der Termin " + this.offer.title +  " am" + this.getDate(date.date_time).toLocaleDateString('de-at') + " um " + this.getDate(date.date_time) +  "wurde gebucht!");
      this.router.navigate(['/profile']);
      console.log(newDate);
    });
  }
}
