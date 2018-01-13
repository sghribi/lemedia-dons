import {Component, Input, OnInit} from '@angular/core';
import {IDonation} from '../donation';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-payment',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class PaymentComponent implements OnInit {
  @Input() donationData: IDonation;
  paying: boolean;
  stripeHandler: any;

  ngOnInit() {
    this.paying = false;
    this.stripeHandler = (<any>window).StripeCheckout.configure({
      key: environment.stripePublicKey,
      locale: 'auto',
      token:  (token: any) => {
        console.log(token);
        this.paying = false;
      }
    });
  }

  pay() {
    this.paying = true;
    this.stripeHandler.open({
      name: 'Le Média',
      description: 'Don pour Le Média',
      currency: 'eur',
      amount: this.donationData.amount,
      email: this.donationData.email,
      metadata: this.donationData,
    });
  }
}
