import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScTableCardComponent } from './sc-table-card.component';

describe('ScTableCardComponent', () => {
  let component: ScTableCardComponent;
  let fixture: ComponentFixture<ScTableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScTableCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
