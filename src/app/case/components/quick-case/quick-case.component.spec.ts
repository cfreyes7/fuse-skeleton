import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickCaseComponent } from './quick-case.component';

describe('QuickCaseComponent', () => {
  let component: QuickCaseComponent;
  let fixture: ComponentFixture<QuickCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
