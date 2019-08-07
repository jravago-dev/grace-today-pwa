import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseDashboardComponent } from './verse-dashboard.component';

describe('VerseDashboardComponent', () => {
  let component: VerseDashboardComponent;
  let fixture: ComponentFixture<VerseDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerseDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
