import {Routes} from '@angular/router';
import {FuseMainComponent} from './main/main.component';
import {FormLayoutComponent} from './main/components/form-layout/form-layout.component';

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
      }
    ]
  },
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {path: '**', redirectTo: 'app'}
];
