import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorMapComponent } from './indoor-map.component';

describe('IndoorMapComponent', () => {
  let component: IndoorMapComponent;
  let fixture: ComponentFixture<IndoorMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndoorMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndoorMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
