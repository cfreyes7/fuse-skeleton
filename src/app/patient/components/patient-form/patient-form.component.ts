import {Component, Injector, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {BaseForm} from '../../../core/base-form';

@Component({
  selector: 'flox-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent extends BaseForm implements OnInit {

  patientForm: FormGroup;
  languages = [];
  ethnicities = ['White', 'Black'];
  genders = ['Male', 'Female'];
  employeeStatuses = ['unemployed', 'employed'];

  constructor(injector: Injector, private fb: FormBuilder) {
    super(injector);
    this.patientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      socialSecurity: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      dob: ['', Validators.required],
      language: ['', Validators.required],
      gender: ['', Validators.required],
      ethnicity: ['', Validators.required],
      insPrimary: ['', Validators.required],
      insGroupName: ['', Validators.required],
      insGroupId: ['', Validators.required],
      insPlanCode: ['', Validators.required],
      insClaimMember: ['', Validators.required],
      workEmployeeName: ['', Validators.required],
      workEmployeeNumber: ['', Validators.required],
      workStatus: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  addLanguage(lang) {
    if (lang.value !== '') {
      this.languages.push(lang.value);
      lang.input = '';
    }
  }

  removeLanguage(lang) {
    const index = this.languages.indexOf(lang);
    if (index >= 0) {
      this.languages.splice(index, 1);
    }
  }

}
