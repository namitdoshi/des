import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvExamListComponent } from './ev-exam-list.component';

describe('EvExamListComponent', () => {
  let component: EvExamListComponent;
  let fixture: ComponentFixture<EvExamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvExamListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvExamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
