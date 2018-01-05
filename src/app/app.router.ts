import {Routes} from '@angular/router';
import {LayoutComponent, WizardLayoutComponent} from './core';

export const routes: Routes = [
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {
        path: 'wizard',
        component: WizardLayoutComponent,
        outlet: 'wizard',
        children: [
          {
            path: 'cases',
            loadChildren: './case/case.module#CaseModule'
          }
        ]
      },
      {
        path: '',
        loadChildren: './case/case.module#CaseModule'
      }
    ]
  },
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {path: '**', redirectTo: 'app'}
];
