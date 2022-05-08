import {Component, OnInit} from '@angular/core';
import {OfferService} from "../../../shared/offer-service";
import {Offer} from "../../../shared/offer";
import {ActivatedRoute} from "@angular/router";
import {DateService} from "../../../shared/date-service";
import {DateObj} from 'src/app/shared/Date';

@Component({
  selector: 'shs-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {
  offers: Offer[] = [];
  tempOffers: Offer[] = [];
  tempDates: DateObj[] = [];
  courseName: string = "";

  constructor(private os: OfferService, private ds: DateService, private route: ActivatedRoute) {
    this.courseName = route.snapshot.params['course'];
  }

  ngOnInit(): void {
    this.os.getOffersByCourse(this.courseName).subscribe(res => this.tempOffers = res);
    this.ds.getAll().subscribe(res => this.tempDates = res);
    window.setTimeout(() => {
      for (let offer of this.tempOffers) {
        for (let date of this.tempDates) {
          if (offer.id === date.offers.id) {
            this.offers.push(offer);
            break;
          }
        }
      }
    }, 500);
    console.log(this.offers);
  }
}
