import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseParentComponent } from './warehouse-parent.component';

describe('WarehouseParentComponent', () => {
  let component: WarehouseParentComponent;
  let fixture: ComponentFixture<WarehouseParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
