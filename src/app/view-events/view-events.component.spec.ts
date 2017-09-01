import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEventsComponent } from './view-events.component';

describe('ViewEventsComponent', () => {
  let component: ViewEventsComponent;
  let fixture: ComponentFixture<ViewEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
