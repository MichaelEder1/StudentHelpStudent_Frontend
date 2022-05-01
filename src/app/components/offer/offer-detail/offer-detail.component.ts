import { Component, OnInit } from '@angular/core';
import {DateService} from "../../../shared/date-service";
import {ActivatedRoute} from "@angular/router";
import {Date} from "../../../shared/Date";

@Component({
  selector: 'shs-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss']
})
export class OfferDetailComponent implements OnInit {

  dates: Date[] = [];
  offerId: number = 0;

  constructor(private ds:DateService, private route:ActivatedRoute) {
    this.offerId = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.ds.getDatesForOffer(this.offerId).subscribe(res => this.dates = res);
    window.setTimeout(() => console.log(this.dates), 500);
  }

}
