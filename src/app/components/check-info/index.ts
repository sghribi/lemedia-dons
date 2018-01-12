import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {CheckInfoDialogComponent} from './dialog';

@Component({
  selector: 'app-check-info',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class CheckInfoComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(CheckInfoDialogComponent);
  }
}
