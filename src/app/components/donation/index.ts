import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AmountSelectorComponent} from '../amount-selector';

@Component({
  selector: 'app-donation',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class DonationComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  amountFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  ngOnInit() {
    this.amountFormGroup = this.formBuilder.group({
      amount: [AmountSelectorComponent.DEFAULT_AMOUNT, Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
