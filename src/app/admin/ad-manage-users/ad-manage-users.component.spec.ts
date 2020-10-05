import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdManageUsersComponent } from './ad-manage-users.component';

describe('AdManageUsersComponent', () => {
  let component: AdManageUsersComponent;
  let fixture: ComponentFixture<AdManageUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdManageUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdManageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
