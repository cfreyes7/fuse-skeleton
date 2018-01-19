import {Routes} from '@angular/router';
import {QuickCaseComponent} from './components/quick-case/quick-case.component';
import {CaseListComponent} from './components/case-list/case-list.component';

export const routes: Routes = [
  {
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
