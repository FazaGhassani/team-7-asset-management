import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetChildComponent } from './asset-child.component';

describe('AssetChildComponent', () => {
  let component: AssetChildComponent;
  let fixture: ComponentFixture<AssetChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
