import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutParentComponent } from './checkout-parent.component';

describe('CheckoutParentComponent', () => {
  let component: CheckoutParentComponent;
  let fixture: ComponentFixture<CheckoutParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
