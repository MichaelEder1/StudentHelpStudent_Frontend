import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../shared/authentification.service";
import {UserService} from "../../../shared/user-service";
import {User} from "../../../shared/user";
import {UserFactory} from "../../../shared/user-factory";
import {Offer} from "../../../shared/offer";

@Component({
  selector: 'shs-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  desktop: boolean = true;
  user: User = UserFactory.empty();

  constructor(public auth: AuthenticationService, public us: UserService) {

  }

  ngOnInit(): void {
    this.desktop = this.isDesktop();
    this.us.getUser(Number(sessionStorage.getItem("userId"))).subscribe(res => this.user = res);
  }

  isDesktop() {
    return window.innerWidth >= 768;
  }

  getUserRole() {
    return this.user.role;
  }
}
