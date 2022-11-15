import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinAddComponent } from './checkin-add.component';

describe('CheckinAddComponent', () => {
  let component: CheckinAddComponent;
  let fixture: ComponentFixture<CheckinAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckinAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
