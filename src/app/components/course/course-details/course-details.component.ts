import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DateService} from "../../../shared/date-service";
import {Date} from '../../../shared/Date';
//import {Course} from '../../../shared/Course';


@Component({
  selector: 'shs-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  dates: Date[] = [];
  courseId: number = 0;

  constructor(private ds: DateService, private route: ActivatedRoute) {
    this.courseId = route.snapshot.params['id'];
    console.log(this.courseId);
  }

  ngOnInit(): void {
    this.ds.getDatesForCourse(this.courseId).subscribe(res => this.dates = res);
    window.setTimeout(() =>console.log(this.dates), 500);
  }

}
