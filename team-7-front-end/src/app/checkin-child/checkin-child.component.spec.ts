import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinChildComponent } from './checkin-child.component';

describe('CheckinChildComponent', () => {
  let component: CheckinChildComponent;
  let fixture: ComponentFixture<CheckinChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckinChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
