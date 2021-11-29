import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolclassContainerComponent } from './schoolclass-container.component';

describe('SchoolclassContainerComponent', () => {
  let component: SchoolclassContainerComponent;
  let fixture: ComponentFixture<SchoolclassContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolclassContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolclassContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
