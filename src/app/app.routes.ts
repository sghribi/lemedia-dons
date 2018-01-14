import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/index';
import {ThankYouComponent} from './components/thank-you';
import {LegalMentionComponent} from './components/legal-mention';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'mentions-legales',
    component: LegalMentionComponent,
  },
  {
    path: 'merci',
    component: ThankYouComponent,
  }
];
