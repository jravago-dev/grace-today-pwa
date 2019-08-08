import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraceDashboardComponent } from './grace-dashboard.component';

describe('GraceDashboardComponent', () => {
  let component: GraceDashboardComponent;
  let fixture: ComponentFixture<GraceDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraceDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
