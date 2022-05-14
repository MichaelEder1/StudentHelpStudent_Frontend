import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {OfferService} from "../../shared/offer-service";
import {DateobjFactory} from "../../shared/dateobj-factory";
import {CourseService} from "../../shared/course-service";
import {Course, Program} from "../../shared/offer";
import {ProgramService} from "../../shared/program-service";
import {OfferFormErrorMessages} from "./offer-form-error-messages";
import {OffersFactory} from "../../shared/offers-factory";

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
  selectedItem: string = "";
  errors: { [key: string]: string } = {};
  isUpdatingCourse = false;
  dates: FormArray;


  constructor(private fb: FormBuilder,
              private os: OfferService,
              private cs: CourseService,
              private ps: ProgramService,
              private route: ActivatedRoute,
              private router: Router) {
    this.offerForm = this.fb.group({});
    this.dates = this.fb.array([]);
  }

  ngOnInit(): void {
    this.ps.getAll().subscribe(res => this.programs = res);
    this.cs.getAll().subscribe(res => this.allCourses = res);
    window.setTimeout(() => console.log(this.selectedItem), 500);
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isUpdatingCourse = true;
      this.os.getSingle(id).subscribe(offer => {
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

  initOffer() {
    this.buildDatesArray();
    this.offerForm = this.fb.group({
      id: this.offer.id,
      title: [this.offer.title, Validators.required],
      information: [this.offer.information, Validators.required],
      studiengang: [this.offer.program, Validators.required],
      lehrveranstaltung: [this.offer.course, Validators.required],
      dates: this.dates
    });
    this.offerForm.statusChanges.subscribe(() => {
      this.updateErrorMessages();
    });
  }

  buildDatesArray() {
    if (this.offer.dates) {
      this.dates = this.fb.array([]);
      for (let date of this.offer.dates) {
        let fg = this.fb.group(
          {
            id: new FormControl(date.id),
            date_time: new FormControl(date.date_time, [Validators.required]),
          }
        );
        this.dates.push(fg);
      }
    }
  }

  addDate() {
    this.dates.push(this.fb.group(DateobjFactory.empty()));
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
}
