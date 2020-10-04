import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvMyEvalComponent } from './ev-my-eval.component';

describe('EvMyEvalComponent', () => {
  let component: EvMyEvalComponent;
  let fixture: ComponentFixture<EvMyEvalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvMyEvalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvMyEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
