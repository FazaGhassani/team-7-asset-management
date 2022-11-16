import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutChildComponent } from './checkout-child.component';

describe('CheckoutChildComponent', () => {
  let component: CheckoutChildComponent;
  let fixture: ComponentFixture<CheckoutChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
