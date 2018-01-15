import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormValidatorService} from '../../../core';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'flox-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit, OnDestroy {

  @Input()
  parentForm: FormGroup;

  @Input()
  controlName = 'insurances';

  insuranceForm: FormGroup;

  private _subcriptions: Subscription[];

  constructor(private fb: FormBuilder,
              private formValidator: FormValidatorService) {
  }

  ngOnInit() {
    this._subcriptions = [];
    this.insuranceForm = this.fb.group({
      insurances: this.fb.array([])
    });
    this.addInsurance();

    if (this.parentForm) {
      this.parentForm.addControl(this.controlName, this.getInsurances);
    }
  }

  ngOnDestroy() {
    for (const sub  of this._subcriptions) {
      sub.unsubscribe();
    }
  }

  get getInsurances() {
    return this.insuranceForm.get('insurances') as FormArray;
  }

  addInsurance() {
    const primaryControl = new FormControl(false);
    this.getInsurances.push(this.fb.group({
      primary: primaryControl,
      groupName: ['', Validators.required],
      groupId: ['', Validators.required],
      planCode: ['', Validators.required],
      clain: ['', Validators.required]
    }));
    const lasIndex = this.getInsurances.controls.length - 1;
    this._subcriptions.push(primaryControl.valueChanges.subscribe((value: boolean) => {
      if (value === true) {
        this.adjustControls(lasIndex);
      }
    }));
  }

  removeInsurance(index: number) {
    const insurance = this.getInsurances;
    insurance.removeAt(index);
  }

  validate() {
    return this.formValidator.validate(this.insuranceForm);
  }

  isValid() {
    return this.insuranceForm.valid;
  }

  private adjustControls(index: number) {
    const insurance = this.getInsurances;
    insurance.controls.forEach((control: AbstractControl, key: number) => {
      if (index !== key) {
        control.patchValue({
          primary: false
        });
      }
    });
  }
}
