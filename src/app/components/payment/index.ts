import {Component, Input, OnInit} from '@angular/core';
import {IDonation} from '../donation';

@Component({
  selector: 'app-payment',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class PaymentComponent implements OnInit {
  @Input() donationData: IDonation;
  paying: boolean;

  ngOnInit() {
    this.paying = false;
  }

  pay() {
    this.paying = true;

    // @TODO: implement Stripe
    setTimeout(() => this.paying = false, 500);
  }
}
