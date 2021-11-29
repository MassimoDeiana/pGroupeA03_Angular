import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolclassFormComponent } from './schoolclass-form.component';

describe('SchoolclassFormComponent', () => {
  let component: SchoolclassFormComponent;
  let fixture: ComponentFixture<SchoolclassFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolclassFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolclassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
