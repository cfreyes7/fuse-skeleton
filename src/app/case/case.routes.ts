import {Routes} from '@angular/router';
import {QuickCaseComponent} from './components/quick-case/quick-case.component';
import {CaseListComponent} from './components/case-list/case-list.component';
import {CaseSummaryComponent} from './components/case-summary/case-summary.component';

export const routes: Routes = [
  {
    path: 'summary/:id',
    component: CaseSummaryComponent
  }, {
    path: 'quick',
    component: QuickCaseComponent
  },
  {
    path: 'list',
    component: CaseListComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];
