import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvPaperAllocationTabsComponent } from './ev-paper-allocation-tabs.component';

describe('EvPaperAllocationTabsComponent', () => {
  let component: EvPaperAllocationTabsComponent;
  let fixture: ComponentFixture<EvPaperAllocationTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvPaperAllocationTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvPaperAllocationTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
