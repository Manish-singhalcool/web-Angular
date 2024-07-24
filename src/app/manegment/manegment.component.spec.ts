import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManegmentComponent } from './manegment.component';

describe('ManegmentComponent', () => {
  let component: ManegmentComponent;
  let fixture: ComponentFixture<ManegmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManegmentComponent]
    });
    fixture = TestBed.createComponent(ManegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
