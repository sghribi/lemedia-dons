import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatCommonModule, MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule, MatGridListModule, MatIconModule,
  MatInputModule, MatMenuModule, MatOptionModule, MatSelectModule,
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
  ],
  imports: [
    BrowserModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CheckInfoDialogComponent,
  ]
})
export class AppModule { }
