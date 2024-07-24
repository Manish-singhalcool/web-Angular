import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcaComponent } from './bca.component';

describe('BcaComponent', () => {
  let component: BcaComponent;
  let fixture: ComponentFixture<BcaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BcaComponent]
    });
    fixture = TestBed.createComponent(BcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
