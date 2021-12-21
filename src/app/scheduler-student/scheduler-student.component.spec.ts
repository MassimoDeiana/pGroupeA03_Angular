import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerStudentComponent } from './scheduler-student.component';

describe('SchedulerStudentComponent', () => {
  let component: SchedulerStudentComponent;
  let fixture: ComponentFixture<SchedulerStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulerStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
