import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAnnouncementsComponent } from './view-announcements.component';

describe('ViewAnnouncementsComponent', () => {
  let component: ViewAnnouncementsComponent;
  let fixture: ComponentFixture<ViewAnnouncementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAnnouncementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
