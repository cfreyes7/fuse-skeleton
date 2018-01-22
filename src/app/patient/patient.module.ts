import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { PatientFormComponent } from './components/patient-form/patient-form.component';
import {SharedModule} from '../core/modules/shared.module';
import {routes} from './patient.routes';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PatientFormComponent]
})
export class PatientModule { }
