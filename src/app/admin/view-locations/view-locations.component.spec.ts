import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLocationsComponent } from './view-locations.component';

describe('ViewLocationsComponent', () => {
  let component: ViewLocationsComponent;
  let fixture: ComponentFixture<ViewLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
