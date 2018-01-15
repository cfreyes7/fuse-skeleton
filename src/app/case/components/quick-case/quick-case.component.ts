import {Component, Injector, OnInit} from '@angular/core';
import {BaseForm, FormValidatorService} from '../../../core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'flox-quick-case',
  templateUrl: './quick-case.component.html',
  styleUrls: ['./quick-case.component.scss']
})
export class QuickCaseComponent extends BaseForm implements OnInit {

  caseForm: FormGroup;

  constructor(injector: Injector,
              private fb: FormBuilder,
              private formValidator: FormValidatorService) {
    super(injector);
  }

  ngOnInit() {
    this.caseForm = this.fb.group({
      case: ['', Validators.required],
      description: ['', Validators.required],
      status: 'OPEN',
      linkPatient: false,
      transportation: this.fb.group({
        date: ['', Validators.required],
        location: ['', Validators.required]
      }),
      files: null
    });
    this.caseForm.get('files').valueChanges.subscribe((res) => {
      console.log(res);
    });
  }

  onchange() {
    console.log(arguments);
  }

  onSubmit(form: FormGroup) {
    if (this.formValidator.validate(form)) {

    }
  }
}
