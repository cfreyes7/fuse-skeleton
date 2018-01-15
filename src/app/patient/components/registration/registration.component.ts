import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormValidatorService} from '../../../core';

@Component({
  selector: 'flox-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @Input()
  parentForm: FormGroup;

  @Input()
  controlName = 'registration';

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder,
              private formValidator: FormValidatorService) {
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      date: [null, Validators.required],
      assignedProvider: [null, Validators.required],
      physician: [null, Validators.required]
    });

    if (this.parentForm) {
      this.parentForm.addControl(this.controlName, this.registrationForm);
    }
  }

}
