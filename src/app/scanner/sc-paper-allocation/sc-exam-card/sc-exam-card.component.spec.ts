import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScExamCardComponent } from './sc-exam-card.component';

describe('ScExamCardComponent', () => {
  let component: ScExamCardComponent;
  let fixture: ComponentFixture<ScExamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScExamCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScExamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
