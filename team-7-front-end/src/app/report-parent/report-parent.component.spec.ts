import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportParentComponent } from './report-parent.component';

describe('ReportParentComponent', () => {
  let component: ReportParentComponent;
  let fixture: ComponentFixture<ReportParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
