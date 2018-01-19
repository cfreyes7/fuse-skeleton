import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HospitalizationsComponent} from './components/hospitalizations/hospitalizations.component';
import {DailyReferralComponent} from './components/daily-referral/daily-referral.component';
import {TaskReportsComponent} from './components/task-reports/task-reports.component';
import {PocMetricsComponent} from './components/poc-metrics/poc-metrics.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HospitalizationsComponent,
    DailyReferralComponent,
    TaskReportsComponent,
    PocMetricsComponent]
})
export class ReportModule {
}
