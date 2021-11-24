import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherContainerComponent } from './teacher-container.component';

describe('TeacherContainerComponent', () => {
  let component: TeacherContainerComponent;
  let fixture: ComponentFixture<TeacherContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
