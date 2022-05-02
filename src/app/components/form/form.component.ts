import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {OfferService} from "../../shared/offer-service";
import {DateFactory} from "../../shared/date-factory";
import {CourseService} from "../../shared/course-service";
import {Course} from "../../shared/offer";

@Component({
  selector: 'shs-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  offerForm: FormGroup;
  date = DateFactory.empty();
  courses: Course[] = [];

  errors: { [key: string]: string } = {};

  isUpdatingCourse = false;

  dates: FormArray;


  constructor(private fb: FormBuilder,
              private os: OfferService,
              private cs: CourseService,
              private route: ActivatedRoute,
              private router: Router) {
    this.offerForm = this.fb.group({});
    this.dates = this.fb.array([]);
  }

  ngOnInit(): void {

    this.cs.getAll().subscribe(res => this.courses = res);
    window.setTimeout(()=>console.log(this.courses),500);
  }
}
