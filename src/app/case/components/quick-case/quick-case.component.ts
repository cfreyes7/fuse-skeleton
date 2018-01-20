import {Component, Injector, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {BaseForm} from '../../../core/base-form';
import {FormValidatorService} from '../../../core/services/form-validator.service';

@Component({
  selector: 'flox-quick-case',
  templateUrl: './quick-case.component.html',
  styleUrls: ['./quick-case.component.scss']
})
export class QuickCaseComponent extends BaseForm implements OnInit {

  selectable = true;
  removable = true;
  addOnBlur = true;
  selected = '';
  caseForm: FormGroup;

  constructor(injector: Injector,
              private fb: FormBuilder,
              private formValidator: FormValidatorService,
              ) {
    super(injector);
  }
  separatorKeysCodes = [ENTER, COMMA];
  status = [
    {
      value    : 'open-0',
      viewValue: 'Open'
    },
    {
      value    : 'close-1',
      viewValue: 'Close'
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
  facility = [
    {
      value    : 'one-0',
      viewValue: 'UMHC SYLVESTERCOMPREHENSIVE CANCER CTR'
    }
  ];
  cms = [
    {
      value    : 'one-0',
      viewValue: 'Liz Carrillo',
      img      : 'assets/images/avatars/alice.jpg'
    },
    {
      value    : 'two-1',
      viewValue: 'Boyle Diaz',
      img      : 'assets/images/avatars/andrew.jpg'
    }
  ];
  dxs = [
    {
      value    : 'one-0',
      viewValue: 'Need Appoiment'
    }
  ];
  planneds = [
    {
      value    : 'er-0',
      viewValue: 'ER'
    },
    {
      value    : 'obs-1',
      viewValue: 'OBS'
    },
    {
      value    : 'inpatient-1',
      viewValue: 'Inpatient'
    },
    {
      value    : 'rehab-1',
      viewValue: 'Rehab'
    },
    {
      value    : 'snf-1',
      viewValue: 'SNF'
    }
  ];
  chips = [
    { name: '150.9 HEART FAILURE UNESPECIFIED' },
    { name: 'N39.0 UTI SITE NOT SPECIFIC' },
    { name: 'N39.0 UTI SITE NOT SPECIFIC' },
  ];
  patients = [
    { name: 'Jhon Doe' },
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
  addChip(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.chips.push({ name: value.trim() });
    }
    if (input) {
      input.value = '';
    }
  }
  removeChip(chips: any): void {
    const index = this.chips.indexOf(chips);
    if (index >= 0) {
      this.chips.splice(index, 1);
    }
  }
}

