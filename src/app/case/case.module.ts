import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {routes} from './case.router';
import {CaseDashboardComponent} from './components/case-dashboard/case-dashboard.component';
import { QuickCaseComponent } from './components/quick-case/quick-case.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CaseDashboardComponent, QuickCaseComponent]
})
export class CaseModule {
}
