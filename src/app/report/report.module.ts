import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HospitalizationsComponent} from './components/hospitalizations/hospitalizations.component';
import {DailyReferralComponent} from './components/daily-referral/daily-referral.component';
import {TaskReportsComponent} from './components/task-reports/task-reports.component';
import {PocMetricsComponent} from './components/poc-metrics/poc-metrics.component';
import {SharedModule} from '../core/modules/shared.module';
import {routes} from './report.routes';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HospitalizationsComponent,
    DailyReferralComponent,
    TaskReportsComponent,
    PocMetricsComponent]
})
export class ReportModule {
}
