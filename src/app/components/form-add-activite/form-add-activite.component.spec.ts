import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddActiviteComponent } from './form-add-activite.component';

describe('FormAddActiviteComponent', () => {
  let component: FormAddActiviteComponent;
  let fixture: ComponentFixture<FormAddActiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddActiviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
