import {Component, Input, OnInit} from '@angular/core';
import {Program} from "../../../shared/program";

@Component({
  selector: 'div.shs-program-list-item',
  templateUrl: './program-list-item.component.html',
  styleUrls: ['./program-list-item.component.scss']
})
export class ProgramListItemComponent implements OnInit {
  @Input() program: Program | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
