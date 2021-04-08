import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourrielsComponent } from './courriels.component';

describe('CourrielsComponent', () => {
  let component: CourrielsComponent;
  let fixture: ComponentFixture<CourrielsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourrielsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourrielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
