import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalizationsComponent } from './hospitalizations.component';

describe('HospitalizationsComponent', () => {
  let component: HospitalizationsComponent;
  let fixture: ComponentFixture<HospitalizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
