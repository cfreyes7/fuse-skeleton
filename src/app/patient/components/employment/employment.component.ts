import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormValidatorService} from '../../../core';

@Component({
  selector: 'flox-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent implements OnInit {

  @Input()
  parentForm: FormGroup;

  @Input()
  controlName = 'employment';

  employmentForm: FormGroup;

  phoneControl: Array<number[]> = [];

  constructor(private fb: FormBuilder,
              private formValidator: FormValidatorService) {
  }

  ngOnInit() {
    this.employmentForm = this.fb.group({
      status: ['', Validators.required],
      name: ['', Validators.required],
      phones: this.fb.array([
        ['', Validators.required]
      ])
    });

    if (this.parentForm) {
      this.parentForm.addControl(this.controlName, this.employmentForm);
    }
  }

  get phoneControls() {
    return this.employmentForm.get('phones') as FormArray;
  }

  addPhone() {
    const phones = this.phoneControls;
    phones.push(new FormControl(null));
    this.syncPhoneControls();
  }

  removePhone(index: number) {
    const phones = this.phoneControls;
    phones.removeAt(index);
    this.syncPhoneControls();
  }

  syncPhoneControls() {
    this.phoneControl = [];
    let controls = [];
    this.phoneControls.controls.forEach((control: FormControl, index: number, array: AbstractControl[]) => {
      if (index > 0) {
        controls.push(index);
        if (controls.length === 2 || array.length - 1 === index) {
          this.phoneControl.push(controls);
          controls = [];
        }
      }
    });
  }

  validate() {
    return this.formValidator.validate(this.employmentForm);
  }

}
