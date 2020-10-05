import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvPaperAllocationComponent } from './ev-paper-allocation.component';

describe('EvPaperAllocationComponent', () => {
  let component: EvPaperAllocationComponent;
  let fixture: ComponentFixture<EvPaperAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvPaperAllocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvPaperAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
