import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-check-info-dialog',
  templateUrl: './template-dialog.html',
})
export class CheckInfoDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
