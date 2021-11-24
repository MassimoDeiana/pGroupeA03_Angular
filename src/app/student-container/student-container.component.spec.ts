import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentContainerComponent } from './student-container.component';

describe('StudentContainerComponent', () => {
  let component: StudentContainerComponent;
  let fixture: ComponentFixture<StudentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
