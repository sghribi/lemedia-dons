import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AmountSelectorComponent} from '../amount-selector';
import {parse} from 'libphonenumber-js';
import {UserInfoFormComponent} from '../user-info-form';
import {isEmpty} from 'lodash';


@Component({
  selector: 'app-donation',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class DonationComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  amountFormGroup: FormGroup;
  userInfoFormGroup: FormGroup;

  ngOnInit() {
    this.amountFormGroup = this.formBuilder.group({
      amount: [AmountSelectorComponent.DEFAULT_AMOUNT,  Validators.compose([Validators.required, Validators.min(100)])]
    });
    this.userInfoFormGroup = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      isCompany: [false],
      socialReason: ['', Validators.compose([Validators.required, Validators.min(2)])],
      firstName: ['', Validators.compose([Validators.required, Validators.min(2)])],
      lastName: ['', Validators.compose([Validators.required, Validators.min(2)])],
      phoneNumber: ['', Validators.compose([Validators.required, this.validatePhoneNumber])],
      address: ['', Validators.compose([Validators.required, Validators.min(5)])],
      zipCode: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{4,5}')])],
      city: ['', Validators.compose([Validators.required, Validators.min(2)])],
      country: [UserInfoFormComponent.DEFAULT_COUNTRY, Validators.required],
    });
  }

  validatePhoneNumber(control: FormControl) {
    if (isEmpty(parse(control.value, {country: {'default': 'FR'}}))) {
      return {
        phoneNumber: {}
      };
    }

    return null;
  }
}
