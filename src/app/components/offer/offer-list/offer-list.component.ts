import {Component, OnInit} from '@angular/core';
import {OfferService} from "../../../shared/offer-service";
import {Offer} from "../../../shared/offer";
import {ActivatedRoute} from "@angular/router";
import {DateobjService} from "../../../shared/dateobj-service";
import {DateObj} from 'src/app/shared/dateobj';

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

  constructor(private os: OfferService, private ds: DateobjService, private route: ActivatedRoute) {
    this.courseName = route.snapshot.params['course'];
  }

  ngOnInit(): void {
    this.ds.getAll().subscribe(res => {
        this.tempDates = res;
        this.os.getOffersByCourse(this.courseName).subscribe(res => this.tempOffers = res);
      }
    );
    console.log(this.tempDates);
    window.setTimeout(() => {
      for (let offer of this.tempOffers) {
        for (let date of this.tempDates) {
          if (offer.id === date.offer_id && this.isInFuture(date.date_time) && !date.student_id) {
            this.offers.push(offer);
            break;
          }
        }
      }
    }, 500);
  }

  isInFuture(dateTime: Date): Boolean {
    return (this.ds.getDate(dateTime) >= new Date());
  }
}
