import {Routes} from '@angular/router';
import {QuickCaseComponent} from './components/quick-case/quick-case.component';
import {CaseDashboardComponent} from './components/case-dashboard/case-dashboard.component';

export const routes: Routes = [
  {
    path: 'quick',
    component: QuickCaseComponent
  },
  {
    path: 'case-dashboard',
    component: CaseDashboardComponent
  },
  {
    path: '',
    redirectTo: 'case-dashboard',
    pathMatch: 'full'
  }
];
