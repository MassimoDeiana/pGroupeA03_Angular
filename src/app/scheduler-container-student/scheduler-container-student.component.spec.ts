import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerContainerStudentComponent } from './scheduler-container-student.component';

describe('SchedulerContainerStudentComponent', () => {
  let component: SchedulerContainerStudentComponent;
  let fixture: ComponentFixture<SchedulerContainerStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulerContainerStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerContainerStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
