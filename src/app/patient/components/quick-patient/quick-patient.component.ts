import {Component, Injector, OnInit} from '@angular/core';
import {BaseForm, FormValidatorService} from '../../../core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'flox-quick-patient',
  templateUrl: './quick-patient.component.html',
  styleUrls: ['./quick-patient.component.scss']
})
export class QuickPatientComponent extends BaseForm implements OnInit {

  patientForm: FormGroup;

  constructor(injector: Injector,
              private fb: FormBuilder,
              private formValidator: FormValidatorService) {
    super(injector);
  }

  ngOnInit() {
    this.patientForm = this.fb.group({});
  }

  onSubmit() {
    if (this.formValidator.validate(this.patientForm)) {

    }
  }
}
