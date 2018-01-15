import {Routes} from '@angular/router';
import {LayoutComponent, WizardLayoutComponent} from './core';

export const routes: Routes = [
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {
        path: 'form',
        component: WizardLayoutComponent,
        outlet: 'form',
        children: [
          {
            path: 'cases',
            loadChildren: './case/case.module#CaseModule'
          },
          {
            path: 'patient',
            loadChildren: './patient/patient.module#PatientModule'
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
