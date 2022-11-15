import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutAddComponent } from './checkout-add.component';

describe('CheckoutAddComponent', () => {
  let component: CheckoutAddComponent;
  let fixture: ComponentFixture<CheckoutAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
