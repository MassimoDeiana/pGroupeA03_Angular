import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteGetComponent } from './note-get.component';

describe('NoteGetComponent', () => {
  let component: NoteGetComponent;
  let fixture: ComponentFixture<NoteGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
