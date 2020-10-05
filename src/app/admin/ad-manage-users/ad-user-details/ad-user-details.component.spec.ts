import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdUserDetailsComponent } from './ad-user-details.component';

describe('AdUserDetailsComponent', () => {
  let component: AdUserDetailsComponent;
  let fixture: ComponentFixture<AdUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdUserDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
