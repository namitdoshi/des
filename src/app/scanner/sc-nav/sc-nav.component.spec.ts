import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScNavComponent } from './sc-nav.component';

describe('ScNavComponent', () => {
  let component: ScNavComponent;
  let fixture: ComponentFixture<ScNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
