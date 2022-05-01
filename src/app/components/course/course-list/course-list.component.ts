import {Component, Input, OnInit} from '@angular/core';
import {CourseService} from "../../../shared/course-service";
import {Course} from "../../../shared/course";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'shs-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  programName:string = "";
  constructor(private cs: CourseService, route: ActivatedRoute) {
    this.programName = route.snapshot.params['course'];
  }

  ngOnInit(): void {
    this.cs.getCourseByCode(this.programName).subscribe(res => this.courses = res);
  }
}
