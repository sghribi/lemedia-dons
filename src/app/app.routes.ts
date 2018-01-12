import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/index';

export const routes: Routes = [
  { path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  }
];
