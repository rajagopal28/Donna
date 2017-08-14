import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleIndoorComponent } from './google-indoor.component';

describe('GoogleIndoorComponent', () => {
  let component: GoogleIndoorComponent;
  let fixture: ComponentFixture<GoogleIndoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleIndoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleIndoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
