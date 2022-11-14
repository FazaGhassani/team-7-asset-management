import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseChildComponent } from './warehouse-child.component';

describe('WarehouseChildComponent', () => {
  let component: WarehouseChildComponent;
  let fixture: ComponentFixture<WarehouseChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
