import { Component, OnInit } from '@angular/core';
import {DateService} from "../../../shared/date-service";
import {ActivatedRoute} from "@angular/router";
import {DateObj} from "../../../shared/Date";
import {DateFactory} from "../../../shared/date-factory";

@Component({
  selector: 'shs-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss']
})
export class OfferDetailComponent implements OnInit {

  dates: DateObj[] = [];
  offerId: number = 0;

  constructor(private ds:DateService, private route:ActivatedRoute) {
    this.offerId = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.ds.getDatesForOffer(this.offerId).subscribe(res => this.dates = res);
  }

  getDate(date: Date) {
    let dateString = date.toString();
    let dateSubstring = dateString.substring(0,10);
    let splittedDate = dateSubstring.split('-');
    let year = Number(splittedDate[0]);
    let month = (Number(splittedDate[1])-1);
    let day = Number(splittedDate[2]);

    let timeString = dateString.substring(11).trim();
    let splittedTime = timeString.split(':');
    let hour = Number(splittedTime[0]);
    let minute = Number(splittedTime[1]);
    let second = Number(splittedTime[2]);

    return new Date(year,month,day,hour,minute,second);
  }
}
