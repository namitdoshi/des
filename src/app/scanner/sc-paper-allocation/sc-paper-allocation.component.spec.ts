import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScPaperAllocationComponent } from './sc-paper-allocation.component';

describe('ScPaperAllocationComponent', () => {
  let component: ScPaperAllocationComponent;
  let fixture: ComponentFixture<ScPaperAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScPaperAllocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScPaperAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
