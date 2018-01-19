import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatTableModule} from '@angular/material';
import {HospitalizationsComponent} from './components/hospitalizations/hospitalizations.component';
import {DailyReferralComponent} from './components/daily-referral/daily-referral.component';
import {TaskReportsComponent} from './components/task-reports/task-reports.component';
import {PocMetricsComponent} from './components/poc-metrics/poc-metrics.component';
import {SharedModule} from '../core/modules/shared.module';
import {routes} from './report.routes';
import { ReportDashboardComponent } from './components/report-dashboard/report-dashboard.component';

@NgModule({
  imports: [
    SharedModule,
    MatTableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HospitalizationsComponent,
    DailyReferralComponent,
    TaskReportsComponent,
    PocMetricsComponent,
    ReportDashboardComponent]
})
export class ReportModule {
}
