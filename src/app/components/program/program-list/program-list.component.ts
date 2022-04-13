import {Component, OnInit} from '@angular/core';
import {ProgramService} from "../../../shared/program-service";
import {Program} from "../../../shared/program";

@Component({
  selector: 'shs-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})
export class ProgramListComponent implements OnInit {

  programs: Program[] = [];

  constructor(private ps: ProgramService) {
  }

  ngOnInit(): void {
    this.ps.getAll().subscribe(res => this.programs = res);
  }
}
