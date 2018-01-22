import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import { QuickTaskComponent } from './quick-task.component';
import {FormValidatorService} from '../../../core/services/form-validator.service';
import {WizardService} from '../../../core/services/wizard.service';

class WizardServiceSpy {

  show = jasmine.createSpy('show').and.callFake(
    () => Promise
      .resolve(true)
      .then(() => Object)
  );

  close = jasmine.createSpy('close').and.callFake(
    () => Promise
      .resolve(true)
      .then(() => Object)
  );
}
describe('QuickTaskComponent', () => {
  let component: QuickTaskComponent;
  let fixture: ComponentFixture<QuickTaskComponent>;
  let hdsSpy: WizardServiceSpy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ QuickTaskComponent, ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [FormValidatorService, FormBuilder],
    })
      .overrideComponent(QuickTaskComponent, {
        set: {
          providers: [
            {provide: WizardService, useClass: WizardServiceSpy}
          ]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach( async(() => {
    hdsSpy = fixture.debugElement.injector.get(WizardService) as any;
  }));
  it('should have called', () => {
    expect(hdsSpy.show.calls).toBeTruthy();
  });
});
