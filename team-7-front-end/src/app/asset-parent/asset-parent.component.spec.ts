import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetParentComponent } from './asset-parent.component';

describe('AssetParentComponent', () => {
  let component: AssetParentComponent;
  let fixture: ComponentFixture<AssetParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
