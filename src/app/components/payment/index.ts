import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {IDonation, IDonationRequest} from '../../interfaces/donation';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {PaymentFailedDialogComponent} from './dialog-error';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'app-payment',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class PaymentComponent implements OnInit {
  @Input() donationData: IDonation;
  paying: boolean;
  showSpinner: boolean;
  stripeHandler: any;

  constructor(private http: HttpClient, private router: Router, private dialog: MatDialog) {}

  ngOnInit() {
    this.paying = false;
    this.showSpinner = false;
    this.stripeHandler = (<any>window).StripeCheckout.configure({
      key: environment.stripePublicKey,
      locale: 'fr',
      token:  this.handleStripePayment.bind(this),
    });
  }

  handleStripePayment(token: any) {
    this.showSpinner = true;
    const request: IDonationRequest = {
      mode: environment.stripeMode,
      stripeTokenId: token.id,
      ...this.donationData
    };

    this.http.post(environment.apiEndPoint, request,  {responseType: 'text'})
    .timeout(20000)
    .subscribe(() => {
        this.router.navigate(['/merci']);
      }, (error) => {
      console.error(error);
      this.dialog.open(PaymentFailedDialogComponent);
    },
      () => {
       this.paying = false;
        this.showSpinner = false;
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
      allowRememberMe: false,
    });
  }
}
