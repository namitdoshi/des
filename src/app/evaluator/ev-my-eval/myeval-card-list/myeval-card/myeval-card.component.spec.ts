import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyevalCardComponent } from './myeval-card.component';

describe('MyevalCardComponent', () => {
  let component: MyevalCardComponent;
  let fixture: ComponentFixture<MyevalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyevalCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyevalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
