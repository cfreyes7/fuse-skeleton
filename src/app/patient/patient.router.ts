import {Routes} from '@angular/router';
import {PatientListComponent} from './components/patient-list/patient-list.component';
import {QuickPatientComponent} from './components/quick-patient/quick-patient.component';

export const routes: Routes = [
  {
    path: 'quick',
    component: QuickPatientComponent
  },
  {
    path: 'patients',
    component: PatientListComponent
  },
  {
    path: '',
    redirectTo: 'patients',
    pathMatch: 'full'
  }
];
