import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedigercourrielComponent } from './redigercourriel.component';

describe('RedigercourrielComponent', () => {
  let component: RedigercourrielComponent;
  let fixture: ComponentFixture<RedigercourrielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedigercourrielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedigercourrielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
