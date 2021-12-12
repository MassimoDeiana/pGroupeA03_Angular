import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterroContainerComponent } from './interro-container.component';

describe('InterroContainerComponent', () => {
  let component: InterroContainerComponent;
  let fixture: ComponentFixture<InterroContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterroContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterroContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
