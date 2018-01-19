import {Component, Injector, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BaseForm} from '../../../core/base-form';
import {FormValidatorService} from '../../../core/services/form-validator.service';

@Component({
  selector: 'flox-quick-task',
  templateUrl: './quick-task.component.html',
  styleUrls: ['./quick-task.component.scss']
})
export class QuickTaskComponent extends BaseForm implements OnInit {

  taskForm: FormGroup;

  constructor(injector: Injector,
              private fb: FormBuilder,
              private formValidator: FormValidatorService) {
    super(injector);
  }
  tasks = [
    {
      value    : 'select-0',
      viewValue: 'Select'
    },
    {
      value    : 'selected-1',
      viewValue: 'Selected'
    }
  ];

  ngOnInit() {
    this.taskForm = this.fb.group({
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
    this.taskForm.get('files').valueChanges.subscribe((res) => res);
  }

  onSubmit(form: FormGroup) {
    if (this.formValidator.validate(form)) {

    }
  }
}
