import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatCommonModule, MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule, MatGridListModule, MatIconModule,
  MatInputModule, MatMenuModule, MatOptionModule, MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {HomeComponent} from './components/home';
import {NavbarComponent} from './components/navbar';
import {DonationComponent} from './components/donation';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CheckInfoComponent} from './components/check-info';
import {CheckInfoDialogComponent} from './components/check-info/dialog';
import {AmountSelectorComponent} from './components/amount-selector';
import {UserInfoFormComponent} from './components/user-info-form';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CountryPipe} from './utils/countries';
import {PaymentComponent} from './components/payment';
import {HttpClientModule} from '@angular/common/http';
import {PaymentFailedDialogComponent} from './components/payment/dialog-error';
import {ThankYouComponent} from './components/thank-you';
import {LegalMentionComponent} from './components/legal-mention';
import {CookieLawModule} from 'angular2-cookie-law';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DonationComponent,
    CheckInfoComponent,
    CheckInfoDialogComponent,
    AmountSelectorComponent,
    UserInfoFormComponent,
    CountryPipe,
    PaymentComponent,
    PaymentFailedDialogComponent,
    ThankYouComponent,
    LegalMentionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCommonModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatCardModule,
    MatTabsModule,
    RouterModule.forRoot(routes),
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatExpansionModule,
    MatGridListModule,
    FlexLayoutModule,
    MatSnackBarModule,
    CookieLawModule,
    MatProgressSpinnerModule,
],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CheckInfoDialogComponent,
    PaymentFailedDialogComponent,
  ]
})
export class AppModule { }
