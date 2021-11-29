import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolclassListComponent } from './schoolclass-list.component';

describe('SchoolclassListComponent', () => {
  let component: SchoolclassListComponent;
  let fixture: ComponentFixture<SchoolclassListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolclassListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolclassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
