import {Component, Injector, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BaseForm} from '../../../core/base-form';
import {FormValidatorService} from '../../../core/services/form-validator.service';

@Component({
  selector: 'flox-quick-case',
  templateUrl: './quick-case.component.html',
  styleUrls: ['./quick-case.component.scss']
})
export class QuickCaseComponent extends BaseForm implements OnInit {

  caseForm: FormGroup;

  constructor(injector: Injector,
              private fb: FormBuilder,
              private formValidator: FormValidatorService
              ) {
    super(injector);
  }
  types = [
    {
      value    : 'dm-0',
      viewValue: 'DM'
    },
    {
      value    : 'hospitalization-1',
      viewValue: 'Hospitalization'
    }
  ];
  status = [
    {
      value    : 'referral-0',
      viewValue: 'Referral Pts'
    },
    {
      value    : 'more-1',
      viewValue: '11 or more Rxs'
    }
  ];
  centers = [
    {
      value    : 'mbmc-0',
      viewValue: 'MBMC'
    },
    {
      value    : 'cc-1',
      viewValue: 'CC'
    }
  ];
  pcps = [
    {
      value    : 'kandiof-0',
      viewValue: 'Dr, Kandiof'
    },
    {
      value    : 'jhon-1',
      viewValue: 'Dr, Jhon'
    }
  ];
  ngOnInit() {
    this.caseForm = this.fb.group({
      case: ['', Validators.required],
      description: ['', Validators.required],
      status: 'OPEN',
      linkPatient: false,
      transportation: this.fb.group({
        date: [null, Validators.required],
        location: ['', Validators.required]
      }),
      files: null
    });
    this.caseForm.get('files').valueChanges.subscribe((res) => res);
  }
  onSubmit(form: FormGroup) {
    if (this.formValidator.validate(form)) {

    }
  }

}
