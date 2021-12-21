import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterroListComponent } from './interro-list.component';

describe('InterroListComponent', () => {
  let component: InterroListComponent;
  let fixture: ComponentFixture<InterroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterroListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
