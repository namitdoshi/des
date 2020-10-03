import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScCardComponent } from './sc-card.component';

describe('ScCardComponent', () => {
  let component: ScCardComponent;
  let fixture: ComponentFixture<ScCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
