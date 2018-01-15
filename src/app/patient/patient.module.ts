import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {routes} from './patient.router';
import {PatientListComponent} from './components/patient-list/patient-list.component';
import {QuickPatientComponent} from './components/quick-patient/quick-patient.component';
import {GeneralInfoComponent} from './components/general-info/general-info.component';
import {InsuranceComponent} from './components/insurance/insurance.component';
import { EmploymentComponent } from './components/employment/employment.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PatientListComponent,
    QuickPatientComponent,
    GeneralInfoComponent,
    InsuranceComponent,
    EmploymentComponent,
    RegistrationComponent
  ]
})
export class PatientModule {
}
