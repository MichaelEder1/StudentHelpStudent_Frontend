import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../shared/authentification.service";

@Component({
  selector: 'shs-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  desktop: boolean = true;

  constructor(public auth: AuthenticationService) {
  }

  ngOnInit(): void {
    this.desktop = this.isDesktop();
  }

  isDesktop() {
    return window.innerWidth >= 768;
  }

}
