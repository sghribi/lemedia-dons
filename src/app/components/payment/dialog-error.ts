import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-payment-failed-dialog',
  templateUrl: './dialog-error.html',
})
export class PaymentFailedDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
