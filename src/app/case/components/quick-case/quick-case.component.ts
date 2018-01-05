import {Component, Injector, OnInit} from '@angular/core';
import {BaseWizard, FormValidatorService} from '../../../core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'flox-quick-case',
  templateUrl: './quick-case.component.html',
  styleUrls: ['./quick-case.component.scss']
})
export class QuickCaseComponent extends BaseWizard implements OnInit {

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
      status: 'OPEN'
    });
  }


  onSubmit(form: FormGroup) {
    if (this.formValidator.validate(form)) {

    }
  }
}
