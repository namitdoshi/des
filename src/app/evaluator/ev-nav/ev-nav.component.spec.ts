import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvNavComponent } from './ev-nav.component';

describe('EvNavComponent', () => {
  let component: EvNavComponent;
  let fixture: ComponentFixture<EvNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
