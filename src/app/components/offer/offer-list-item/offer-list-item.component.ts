import {Component, Input, OnInit} from '@angular/core';
import {Offer} from "../../../shared/offer";

@Component({
  selector: 'div.shs-offer-list-item',
  templateUrl: './offer-list-item.component.html',
  styleUrls: ['./offer-list-item.component.scss']
})
export class OfferListItemComponent implements OnInit {
  @Input() offer: Offer | undefined;
  @Input() courseName: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
