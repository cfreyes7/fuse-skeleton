import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatTableModule, MatCardModule, MatMenuModule} from '@angular/material';
import {HospitalizationsComponent} from './components/hospitalizations/hospitalizations.component';
import {DailyReferralComponent} from './components/daily-referral/daily-referral.component';
import {TaskReportsComponent} from './components/task-reports/task-reports.component';
import {PocMetricsComponent} from './components/poc-metrics/poc-metrics.component';
import {ReportDashboardComponent} from './components/report-dashboard/report-dashboard.component';
import {SharedModule} from '../core/modules/shared.module';
import {routes} from './report.routes';

@NgModule({
  imports: [
    SharedModule,
    MatTableModule,
    MatCardModule,
    MatMenuModule,
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
