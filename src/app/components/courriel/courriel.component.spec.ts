import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourrielComponent } from './courriel.component';

describe('CourrielComponent', () => {
  let component: CourrielComponent;
  let fixture: ComponentFixture<CourrielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourrielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourrielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
