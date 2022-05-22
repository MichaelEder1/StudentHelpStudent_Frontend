import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {OfferService} from "../../shared/offer-service";
import {DateobjFactory} from "../../shared/dateobj-factory";
import {CourseService} from "../../shared/course-service";
import {Offer} from "../../shared/offer";
import {ProgramService} from "../../shared/program-service";
import {OfferFormErrorMessages} from "./offer-form-error-messages";
import {OffersFactory} from "../../shared/offers-factory";
import {ToastrService} from "ngx-toastr";
import {DateobjService} from "../../shared/dateobj-service";
import {Course} from "../../shared/course";
import {Program} from "../../shared/program";
import {formatDate} from "@angular/common";
import {DateObj} from "../../shared/dateobj";

@Component({
  selector: 'shs-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  offerForm: FormGroup;
  offer = OffersFactory.empty();
  allCourses: Course[] = [];
  courses: Course[] = [];
  programs: Program[] = [];
  userId: number = 0;
  selectedItem: string = "";
  errors: { [key: string]: string } = {};

  isUpdatingOffer = false;
  dateObjs: FormArray;


  constructor(private fb: FormBuilder,
              private os: OfferService,
              private cs: CourseService,
              private ps: ProgramService,
              private ds: DateobjService,
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService) {
    this.offerForm = this.fb.group({});
    this.dateObjs = this.fb.array([]);
    this.userId = Number(sessionStorage.getItem('userId'));
  }

  ngOnInit(): void {
    this.ps.getAll().subscribe(res => this.programs = res);
    this.cs.getAll().subscribe(res => this.allCourses = res);
    const id = this.route.snapshot.params['id'];
    if (id != undefined) {
      console.log("is updating!");
      this.isUpdatingOffer = true;
      this.os.getSingle(Number(id)).subscribe(offer => {
        this.offer = offer;
        this.initOffer();
      });
    }
    this.initOffer();
  }

  loadCourses($event: any) {
    //let selectedValue = Number((<HTMLInputElement>document.querySelector("#studiengang")).value);
    //let res: Course[] = [];
    for (let course of this.courses) {
    }
    this.courses = this.allCourses;
  }

  submitForm() {
    let offer: Offer = OffersFactory.fromObject(this.offerForm.value);
    offer.userId = this.offer.userId;
    console.log(offer.dates);
    for(let dateObj of offer.dates){
      dateObj.accepted = false;
      dateObj.course_id = this.offer.course_id;
      dateObj.offer_id = this.offer.id;
      dateObj.program_id = this.offer.program_id;
      dateObj.student_id = 0;
      dateObj.tutor_id = this.userId;
      console.log(dateObj);
    }
    console.log(offer);
    if (this.isUpdatingOffer) {
      this.os.update(offer).subscribe(res => {
        this.router.navigate(["../"], {relativeTo: this.route});
      })

    } else {
      offer.userId = Number(sessionStorage['userId']);
      console.log(offer);
      this.os.create(offer).subscribe(res => {
        this.offer = OffersFactory.empty();
        this.toastr.success("Das Angebot " + this.offer.title + "wurde gespeichert!");
        this.offerForm.reset(offer);
        this.router.navigate(["../"], {relativeTo: this.route});
      });
    }
  }

  initOffer() {
    console.log(this.offer);
    this.buildDatesArray();
    this.offerForm = this.fb.group({
      id: this.offer.id,
      userId: Number(this.offer.userId),
      isAvailable: this.offer.isAvailable,
      title: [this.offer.title, Validators.required],
      information: [this.offer.information, Validators.required],
      program:[this.offer.program_id, Validators.required],
      course: [this.offer.course_id, Validators.required],
      dateObjs: this.dateObjs
    });
    this.offerForm.statusChanges.subscribe(() => {
      this.updateErrorMessages();
    });
  }

  buildDatesArray() {
    if (this.offer.dates) {
      this.dateObjs = this.fb.array([]);
      for (let dateObj of this.offer.dates) {
        let fg = this.fb.group(
          {
            id: new FormControl(dateObj.id),
            date_time: new FormControl(this.formatDate(dateObj.date_time), [Validators.required]),
          }
        );
        this.dateObjs.push(fg);
      }
      console.log(this.dateObjs);
    }
  }


  addDate() {
    this.dateObjs.push(this.fb.group(DateobjFactory.empty()));
  }

  updateErrorMessages() {
    this.errors = {};
    for (const message of OfferFormErrorMessages) {
      const control = this.offerForm.get(message.forControl);
      if (control &&
        control.dirty &&
        control.invalid &&
        control.errors &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]) {
        this.errors[message.forControl] = message.text;
      }
    }
  }

  formatDate(date: any) {
    console.log(date);
    let newDate = date.toString();
    let res = newDate.replace(" ", "T");
    console.log("new:" + date);
    return res;
  }
}
