import {Routes} from '@angular/router';
import {FuseMainComponent} from './main/main.component';
import {FormLayoutComponent} from './main/components/form-layout/form-layout.component';
import {NotificationModule} from './notification/notification.module';

export const routes: Routes = [
  {
    path: 'app',
    component: FuseMainComponent,
    children: [
      {
        path: 'form',
        component: FormLayoutComponent,
        outlet: 'form',
        children: [
          {
            path: 'cases',
            loadChildren: './case/case.module#CaseModule'
          },
          {
            path: 'task',
            loadChildren: './task/task.module#TaskModule'
          },
          {
            path: 'patients',
            loadChildren: './patient/patient.module#PatientModule'
          },
          {
            path: 'notifications',
            loadChildren: './notification/notification.module#NotificationModule'
          }
        ]
      }, {
        path: 'report',
        loadChildren: './report/report.module#ReportModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#TaskModule'
      },
      {
        path: 'cases',
        loadChildren: './case/case.module#CaseModule'
      },
      {
        path: '',
        redirectTo: 'cases',
        pathMatch: 'full'
      },
    ]
  },
  {path: '', redirectTo: 'app', pathMatch: 'full'},

  {path: '**', redirectTo: 'app'}
];
