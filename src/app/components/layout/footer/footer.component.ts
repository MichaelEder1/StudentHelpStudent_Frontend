import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'shs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentYear: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.currentYear = this.getCurrentYear();
  }

  getCurrentYear() {
    let date = new Date();
    return date.getFullYear();
  }

}
