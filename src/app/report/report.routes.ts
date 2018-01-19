import {Routes} from '@angular/router';
import {DailyReferralComponent} from './components/daily-referral/daily-referral.component';
import {HospitalizationsComponent} from './components/hospitalizations/hospitalizations.component';
import {PocMetricsComponent} from './components/poc-metrics/poc-metrics.component';
import {TaskReportsComponent} from './components/task-reports/task-reports.component';

export const routes: Routes = [
  {
    path: 'daily',
    component: DailyReferralComponent
  }, {
    path: 'hospitalizations',
    component: HospitalizationsComponent
  }, {
    path: 'poc',
    component: PocMetricsComponent
  }, {
    path: 'task',
    component: TaskReportsComponent
  }
];
