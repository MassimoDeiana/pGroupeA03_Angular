import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterroFormComponent } from './interro-form.component';

describe('InterroFormComponent', () => {
  let component: InterroFormComponent;
  let fixture: ComponentFixture<InterroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterroFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
