import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcMultiplicationComponent } from './calc-multiplication.component';

describe('CalcMultiplicationComponent', () => {
  let component: CalcMultiplicationComponent;
  let fixture: ComponentFixture<CalcMultiplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcMultiplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalcMultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
