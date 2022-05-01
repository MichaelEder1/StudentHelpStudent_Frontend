import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../shared/authentification.service";
import {UserService} from "../../../shared/user-service";

@Component({
  selector: 'shs-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  desktop: boolean = true;
  image: string = "";

  constructor(public auth: AuthenticationService, private us:UserService) {

  }

  ngOnInit(): void {
    this.desktop = this.isDesktop();
    window.setTimeout(()=>
    this.us.getUser(Number(sessionStorage.getItem("userId"))).subscribe(res => this.image = res.photo),100);
  }

  isDesktop() {
    return window.innerWidth >= 768;
  }

}
