import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyReferralComponent } from './daily-referral.component';

describe('DailyReferralComponent', () => {
  let component: DailyReferralComponent;
  let fixture: ComponentFixture<DailyReferralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyReferralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
