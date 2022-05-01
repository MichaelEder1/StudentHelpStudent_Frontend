import {Component, OnInit} from '@angular/core';
import {OfferService} from "../../../shared/offer-service";
import {Offer} from "../../../shared/offer";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'shs-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {
  offers: Offer[] = [];
  courseName: string = "";

  constructor(private os: OfferService, private route: ActivatedRoute) {
    this.courseName = route.snapshot.params['course'];
    console.log(route.snapshot.params);
  }

  ngOnInit(): void {
    this.os.getOffersByCourse(this.courseName).subscribe(res => this.offers = res);
    window.setTimeout(() => console.log(this.offers), 500);
  }
}
