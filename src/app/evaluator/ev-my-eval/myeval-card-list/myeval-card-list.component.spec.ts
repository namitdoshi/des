import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyevalCardListComponent } from './myeval-card-list.component';

describe('MyevalCardListComponent', () => {
  let component: MyevalCardListComponent;
  let fixture: ComponentFixture<MyevalCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyevalCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyevalCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
