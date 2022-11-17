import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutUpdateComponent } from './checkout-update.component';

describe('CheckoutUpdateComponent', () => {
  let component: CheckoutUpdateComponent;
  let fixture: ComponentFixture<CheckoutUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
