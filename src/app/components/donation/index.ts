import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AmountSelectorComponent} from '../amount-selector';
import {parse} from 'libphonenumber-js';
import {UserInfoFormComponent} from '../user-info-form';
import {isEmpty} from 'lodash';
import {IDonation} from '../../interfaces/donation';

@Component({
  selector: 'app-donation',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class DonationComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  amountFormGroup: FormGroup;
  userInfoFormGroup: FormGroup;
  userInfoStep: number;

  ngOnInit() {
    this.userInfoStep = 0;
    this.amountFormGroup = this.formBuilder.group({
      amount: [AmountSelectorComponent.DEFAULT_AMOUNT,  Validators.compose([Validators.required, Validators.min(100)])]
    });
    this.userInfoFormGroup = this.formBuilder.group({
      personalData: this.formBuilder.group({
        socialReason: ['', this.validateSocialReason],
        firstName: ['', Validators.compose([Validators.required, Validators.min(2)])],
        lastName: ['', Validators.compose([Validators.required, Validators.min(2)])],
        phoneNumber: ['', Validators.compose([Validators.required, this.validatePhoneNumber])],
        isCompany: [false],
        email: ['', Validators.compose([Validators.required, Validators.email])],
      }),
      locationData: this.formBuilder.group({
        address: ['', Validators.compose([Validators.required, Validators.min(5)])],
        zipCode: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{4,5}')])],
        city: ['', Validators.compose([Validators.required, Validators.min(2)])],
        country: [UserInfoFormComponent.DEFAULT_COUNTRY, Validators.required],
      })
    });
  }

  isUserInfoCompleted() {
    return this.userInfoStep === 2 && this.userInfoFormGroup.valid;
  }

  validatePhoneNumber(control: FormControl) {
    if (isEmpty(parse(control.value, {country: {'default': 'FR'}}))) {
      return {
        phoneNumber: {}
      };
    }

    return null;
  }

  validateSocialReason(control: FormControl) {
    if (!control || !control.parent || !control.parent.get('isCompany').value) {
      return null;
    }

    return Validators.compose([Validators.required, Validators.min(2)])(control);
  }

  getDonationData(): IDonation|null {
    if (!this.amountFormGroup.valid || !this.userInfoFormGroup.valid) {
      return null;
    }

    try {
      return {
        amount: parseInt(this.amountFormGroup.get('amount').value),
        firstName: this.userInfoFormGroup.get('personalData').get('firstName').value,
        lastName: this.userInfoFormGroup.get('personalData').get('lastName').value,
        email: this.userInfoFormGroup.get('personalData').get('email').value,
        phoneNumber:  this.userInfoFormGroup.get('personalData').get('phoneNumber').value,
        companyName: this.userInfoFormGroup.get('personalData').get('isCompany').value ?
          this.userInfoFormGroup.get('personalData').get('companyName').value : '',
        address: this.userInfoFormGroup.get('locationData').get('address').value,
        city: this.userInfoFormGroup.get('locationData').get('city').value,
        zipCode: this.userInfoFormGroup.get('locationData').get('zipCode').value,
        country: this.userInfoFormGroup.get('locationData').get('country').value,
      };
    } catch (e) {
      return null;
    }
  }
}
