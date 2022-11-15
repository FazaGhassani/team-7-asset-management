import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinParentComponent } from './checkin-parent.component';

describe('CheckinParentComponent', () => {
  let component: CheckinParentComponent;
  let fixture: ComponentFixture<CheckinParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckinParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
