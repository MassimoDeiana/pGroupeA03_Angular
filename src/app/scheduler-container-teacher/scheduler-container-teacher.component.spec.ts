import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerContainerTeacherComponent } from './scheduler-container-teacher.component';

describe('SchedulerContainerTeacherComponent', () => {
  let component: SchedulerContainerTeacherComponent;
  let fixture: ComponentFixture<SchedulerContainerTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulerContainerTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerContainerTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
