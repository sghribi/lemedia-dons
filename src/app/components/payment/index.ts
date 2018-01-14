import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {IDonation, IDonationRequest} from '../../interfaces/donation';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {PaymentFailedDialogComponent} from './dialog-error';

@Component({
  selector: 'app-payment',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class PaymentComponent implements OnInit {
  @Input() donationData: IDonation;
  paying: boolean;
  stripeHandler: any;

  constructor(private http: HttpClient, private router: Router, private dialog: MatDialog) {}

  ngOnInit() {
    this.paying = false;
    this.stripeHandler = (<any>window).StripeCheckout.configure({
      key: environment.stripePublicKey,
      locale: 'auto',
      token:  this.handleStripePayment.bind(this),
    });
  }

  handleStripePayment(token: any) {
    const request: IDonationRequest = {
      mode: environment.stripeMode,
      stripeTokenId: token.id,
      ...this.donationData
    };

    this.http.post(environment.apiEndPoint, request,  {responseType: 'text'})
    .subscribe(() => {
        this.router.navigate(['/merci']);
      }, (error) => {
      console.error(error);
      this.dialog.open(PaymentFailedDialogComponent);
    },
      () => {
       this.paying = false;
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
