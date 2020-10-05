import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvMyPaperComponent } from './ev-my-paper.component';

describe('EvMyPaperComponent', () => {
  let component: EvMyPaperComponent;
  let fixture: ComponentFixture<EvMyPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvMyPaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvMyPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
