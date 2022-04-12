import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'shs-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  desktop: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
    this.desktop = this.isDesktop();
  }

  isDesktop() {
    return window.innerWidth >= 768;
  }

}
