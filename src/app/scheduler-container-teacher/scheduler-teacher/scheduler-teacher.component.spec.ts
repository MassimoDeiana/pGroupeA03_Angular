import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerTeacherComponent } from './scheduler-teacher.component';

describe('SchedulerComponent', () => {
  let component: SchedulerTeacherComponent;
  let fixture: ComponentFixture<SchedulerTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulerTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
