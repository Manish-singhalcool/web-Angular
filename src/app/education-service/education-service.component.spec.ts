import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationServiceComponent } from './education-service.component';

describe('EducationServiceComponent', () => {
  let component: EducationServiceComponent;
  let fixture: ComponentFixture<EducationServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationServiceComponent]
    });
    fixture = TestBed.createComponent(EducationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
