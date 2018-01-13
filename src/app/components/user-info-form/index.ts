import {Component, Input, OnInit} from '@angular/core';
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
  userInfoForm: FormGroup;
  countries: Country[];

  ngOnInit() {
    this.countries = countries;
  }

  getEmailErrorMessage() {
    return this.userInfoForm.controls.email.hasError('required') ? 'Vous devez saisir votre adresse email.' :
      this.userInfoForm.controls.email.hasError('email') ? 'L\'adresse email saisie est invalide.' :
        '';
  }

  getSocialReasonErrorMessage() {
    return this.userInfoForm.controls.socialReason.hasError('required') ? 'Vous devez saisir la raison sociale.' :
      this.userInfoForm.controls.socialReason.hasError('min') ? 'Le nom de famille saisi est trop court.' :
        '';
  }

  getFirstNameErrorMessage() {
    return this.userInfoForm.controls.firstName.hasError('required') ? 'Vous devez saisir votre prénom.' :
      this.userInfoForm.controls.firstName.hasError('min') ? 'Le prénom saisi est trop court.' :
        '';
  }

  getLastNameErrorMessage() {
    return this.userInfoForm.controls.lastName.hasError('required') ? 'Vous devez saisir votre nom de famille.' :
      this.userInfoForm.controls.lastName.hasError('min') ? 'Le nom de famille saisi est trop court.' :
        '';
  }

  getPhoneNumberErrorMessage() {
    return this.userInfoForm.controls.phoneNumber.hasError('required') ? 'Vous devez saisir votre numéro de téléphone.' :
      this.userInfoForm.controls.phoneNumber.hasError('phoneNumber') ? 'Le numéro de téléphone saisi est incorrect.' :
        '';
  }

  getAddressErrorMessage() {
    return this.userInfoForm.controls.address.hasError('required') ? 'Vous devez saisir votre adresse postale.' :
      this.userInfoForm.controls.address.hasError('min') ? 'L\'adresse saisie est trop courte.' :
        '';
  }

  getZipCodeErrorMessage() {
    return this.userInfoForm.controls.zipCode.hasError('required') ? 'Vous devez saisir votre code postal.' :
      this.userInfoForm.controls.zipCode.hasError('pattern') ? 'Le code postal saisi a un format incorrect.' :
        '';
  }

  getCityErrorMessage() {
    return this.userInfoForm.controls.city.hasError('required') ? 'Vous devez saisir votre ville.' :
      this.userInfoForm.controls.city.hasError('min') ? 'La ville saisie est trop courte.' :
        '';
  }

  getCountryErrorMessage() {
    return this.userInfoForm.controls.country.hasError('required') ? 'Vous devez saisir votre pays.' : '';
  }
}
