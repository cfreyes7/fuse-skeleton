import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocMetricsComponent } from './poc-metrics.component';

describe('PocMetricsComponent', () => {
  let component: PocMetricsComponent;
  let fixture: ComponentFixture<PocMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
