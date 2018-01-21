import {NgModule} from '@angular/core';
import {SystemComponent} from './components/system.component';
import {SharedModule} from '../core/modules/shared.module';
import {RouterModule} from '@angular/router';
import {routes} from './poc.routes';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SystemComponent, ListComponent, DetailComponent]
})
export class PocModule {
}
