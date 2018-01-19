import {NgModule} from '@angular/core';
import {QuickCaseComponent} from './components/quick-case/quick-case.component';
import {SharedModule} from '../core/modules/shared.module';
import {RouterModule} from '@angular/router';
import {routes} from './case.routes';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuickCaseComponent]
})
export class CaseModule {
}
