import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {OfferService} from "../../shared/offer-service";
import {DateFactory} from "../../shared/date-factory";
import {CourseService} from "../../shared/course-service";
import {Course, Program} from "../../shared/offer";
import {ProgramService} from "../../shared/program-service";

@Component({
  selector: 'shs-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  offerForm: FormGroup;
  date = DateFactory.empty();
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
  }

  loadCourses($event: any) {
    let selectedValue = Number((<HTMLInputElement>document.querySelector("#studiengang")).value);
    let res: Course[] = [];
    for (let course of this.allCourses) {
    }
    this.courses = this.allCourses;
  }
}
