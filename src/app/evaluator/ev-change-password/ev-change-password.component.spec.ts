import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvChangePasswordComponent } from './ev-change-password.component';

describe('EvChangePasswordComponent', () => {
  let component: EvChangePasswordComponent;
  let fixture: ComponentFixture<EvChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
