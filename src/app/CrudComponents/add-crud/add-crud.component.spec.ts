import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCrudComponent } from './add-crud.component';

describe('AddCrudComponent', () => {
  let component: AddCrudComponent;
  let fixture: ComponentFixture<AddCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCrudComponent]
    });
    fixture = TestBed.createComponent(AddCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
