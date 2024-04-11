import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcSqrComponent } from './calc-sqr.component';

describe('CalcSqrComponent', () => {
  let component: CalcSqrComponent;
  let fixture: ComponentFixture<CalcSqrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcSqrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalcSqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
