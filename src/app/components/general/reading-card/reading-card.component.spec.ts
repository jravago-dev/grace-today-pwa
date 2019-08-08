import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingCardComponent } from './reading-card.component';

describe('ReadingCardComponent', () => {
  let component: ReadingCardComponent;
  let fixture: ComponentFixture<ReadingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
