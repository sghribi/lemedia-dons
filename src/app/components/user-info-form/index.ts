import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {countries} from '../../utils/countries';

interface Country {
  value: string;
  text: string;
}

@Component({
  selector: 'app-user-info-form',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class UserInfoFormComponent implements OnInit {
  public static readonly DEFAULT_COUNTRY = 'FR';

  @Input()
  step: number;
  @Output()
  stepChange = new EventEmitter<number>();


  @Input()
  userInfoForm: FormGroup;
  countries: Country[];

  ngOnInit() {
    this.countries = countries;
  }

  setStep(index: number) {
    this.step = index;
    this.userInfoForm.markAsPristine();
    this.userInfoForm.markAsUntouched();
    this.stepChange.emit(this.step);
    this.resetFormValidation();
  }

  nextStep() {
    this.step++;
    this.stepChange.emit(this.step);
    this.resetFormValidation();
  }

  resetFormValidation() {
    this.userInfoForm.markAsPristine();
    this.userInfoForm.markAsUntouched();
    this.userInfoForm.updateValueAndValidity();
  }

  isPersonalDataFormValid() {
    if (!this.userInfoForm.get('personalData').get('isCompany').value) {
      this.userInfoForm.get('personalData').get('socialReason').disable();
    } else {
      this.userInfoForm.get('personalData').get('socialReason').enable();
    }

    return this.userInfoForm.get('personalData').valid;
  }

  isLocationDataFormValid() {
    return this.userInfoForm.get('locationData').valid;
  }

  getEmailErrorMessage() {
    return this.userInfoForm.get('personalData').get('email').hasError('required') ? 'Veuillez saisir votre adresse email.' :
      this.userInfoForm.get('personalData').get('email').hasError('email') ? 'L\'adresse email saisie est invalide.' :
        '';
  }

  getSocialReasonErrorMessage() {
    return this.userInfoForm.get('personalData').get('socialReason').hasError('required') ? 'Vous devez saisir la raison sociale.' :
      this.userInfoForm.get('personalData').get('socialReason').hasError('min') ? 'Le nom de famille saisi est trop court.' :
        '';
  }

  getFirstNameErrorMessage() {
    return this.userInfoForm.get('personalData').get('firstName').hasError('required') ? 'Vous devez saisir votre prénom.' :
      this.userInfoForm.get('personalData').get('firstName').hasError('min') ? 'Le prénom saisi est trop court.' :
        '';
  }

  getLastNameErrorMessage() {
    return this.userInfoForm.get('personalData').get('lastName').hasError('required') ? 'Vous devez saisir votre nom de famille.' :
      this.userInfoForm.get('personalData').get('lastName').hasError('min') ? 'Le nom de famille saisi est trop court.' :
        '';
  }

  getPhoneNumberErrorMessage() {
    return this.userInfoForm.get('personalData').get('phoneNumber').hasError('required') ? 'Vous devez saisir votre numéro de téléphone.' :
      this.userInfoForm.get('personalData').get('phoneNumber').hasError('phoneNumber') ? 'Le numéro de téléphone saisi est incorrect.' :
        '';
  }

  getAddressErrorMessage() {
    return this.userInfoForm.get('locationData').get('address').hasError('required') ? 'Vous devez saisir votre adresse postale.' : '';
  }

  getZipCodeErrorMessage() {
    return this.userInfoForm.get('locationData').get('zipCode') .hasError('required') ? 'Vous devez saisir votre code postal.' : '';
  }

  getCityErrorMessage() {
    return this.userInfoForm.get('locationData').get('city').hasError('required') ? 'Vous devez saisir votre ville.' :
      this.userInfoForm.get('locationData').get('city').hasError('min') ? 'La ville saisie est trop courte.' :
        '';
  }

  getCountryErrorMessage() {
    return this.userInfoForm.get('locationData').get('country').hasError('required') ? 'Vous devez saisir votre pays.' : '';
  }
}
