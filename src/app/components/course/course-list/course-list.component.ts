import {Component, Input, OnInit} from '@angular/core';
import {CourseService} from "../../../shared/course-service";
import {Course} from "../../../shared/course";

@Component({
  selector: 'shs-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  @Input() programId: number | undefined;

  constructor(private cs: CourseService) {
  }

  ngOnInit(): void {
    this.cs.getAll().subscribe(res => this.courses = res);
    console.log(this.programId);
  }
}
