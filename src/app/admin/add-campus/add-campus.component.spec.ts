import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampusComponent } from './add-campus.component';

describe('AddCampusComponent', () => {
  let component: AddCampusComponent;
  let fixture: ComponentFixture<AddCampusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCampusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
