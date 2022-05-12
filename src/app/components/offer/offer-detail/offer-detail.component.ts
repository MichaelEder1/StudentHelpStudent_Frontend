import {Component, OnInit} from '@angular/core';
import {DateService} from "../../../shared/date-service";
import {ActivatedRoute, Router} from "@angular/router";
import {DateObj} from "../../../shared/Date";
import {UserService} from "../../../shared/user-service";
import {User} from "../../../shared/user";
import {UserFactory} from "../../../shared/user-factory";
import {AuthenticationService} from "../../../shared/authentification.service";
import {OfferService} from "../../../shared/offer-service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'shs-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss']
})
export class OfferDetailComponent implements OnInit {

  dates: DateObj[] = [];
  offerId: number = 0;
  userId: number = 0;
  user: User = UserFactory.empty();

  constructor(private ds: DateService, private route: ActivatedRoute, private router: Router, private us: UserService, private os: OfferService, public auth: AuthenticationService, private toastr: ToastrService,) {
    this.offerId = route.snapshot.params['id'];
    this.userId = Number(sessionStorage.getItem("userId"));
  }

  ngOnInit(): void {
    this.ds.getDatesForOffer(this.offerId).subscribe(res => this.dates = res);
    this.us.getUser(this.userId).subscribe(res => this.user = res);
  }

  getDate(date: Date) {
    return this.ds.getDate(date);
  }

  removeOffer() {
    this.os.remove(this.offerId).subscribe(res => this.router.navigate(['../'], {relativeTo: this.route}));
    this.toastr.success("Das Angebot wurde gelöscht!");
  }

  removeDate(id: number) {
    this.ds.remove(id).subscribe(res => this.router.navigate(['../'], {relativeTo: this.route}));
    this.toastr.success("Der Termin wurde gelöscht!");
  }

  isInFuture(dateTime: Date): Boolean {
    return (this.getDate(dateTime) >= new Date());
  }
}
