import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormValidatorService} from '../../../core';

@Component({
  selector: 'flox-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  @Input()
  parentForm: FormGroup;

  @Input()
  controlName = 'patientInfo';

  generalForm: FormGroup;

  languagesControl: Array<number[]> = [];

  constructor(private fb: FormBuilder,
              private formValidator: FormValidatorService) {
  }

  ngOnInit() {
    this.generalForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      socialSecurity: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      dob: ['', Validators.required],
      lang: this.fb.array([
        ['', Validators.required]
      ]),
      ethnicity: ['', Validators.required],
      gender: 'MALE',
      race: ['', Validators.required]
    });

    if (this.parentForm) {
      this.parentForm.addControl(this.controlName, this.generalForm);
    }
  }

  get langControls() {
    return this.generalForm.get('lang') as FormArray;
  }

  addLanguage() {
    const langs = this.langControls;
    langs.push(new FormControl(null));
    this.syncLangControls();
  }

  removeLang(index: number) {
    const langs = this.langControls;
    langs.removeAt(index);
    this.syncLangControls();
  }

  syncLangControls() {
    this.languagesControl = [];
    let controls = [];
    this.langControls.controls.forEach((control: FormControl, index: number, array: AbstractControl[]) => {
      if (index > 0) {
        controls.push(index);
        if (controls.length === 2 || array.length - 1 === index) {
          this.languagesControl.push(controls);
          controls = [];
        }
      }
    });
  }

  validate() {
    return this.formValidator.validate(this.generalForm);
  }

  isValid() {
    return this.generalForm.valid;
  }
}
