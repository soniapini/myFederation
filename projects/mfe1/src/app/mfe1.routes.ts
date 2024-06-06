import {Routes} from '@angular/router';
import {SecondComponent} from "./second/second.component";
import {FirstComponent} from "./first/first.component";

export const MFE1_ROUTES: Routes = [
  {
    path: '',
    component: FirstComponent,
    pathMatch: 'full'
  },
  {
    path: 'flight-search',
    component: SecondComponent
  },
];
