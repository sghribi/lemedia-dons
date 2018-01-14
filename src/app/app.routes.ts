import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/index';
import {ThankYouComponent} from './components/thank-you';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'merci',
    component: ThankYouComponent,
  }
];
