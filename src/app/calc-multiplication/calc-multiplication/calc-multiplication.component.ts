import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MultiplyPipe } from '../../pipes/multiply.pipe';

@Component({
  selector: 'app-calc-multiplication',
  standalone: true,
  imports: [MatIcon, FormsModule, ReactiveFormsModule, NgIf, MultiplyPipe],
  templateUrl: './calc-multiplication.component.html',
  styleUrl: './calc-multiplication.component.css'
})
export class CalcMultiplicationComponent {
  pageTitle = 'Make It Simple: Modúlo Multiplicação';


  form: FormGroup = this.formBuilder.group({
    multiplying: ['', Validators.required],
    multiplier: ['', Validators.required]
  })

  result: boolean = false;
  valueRequired: string = '';
  valueCalculateMultplying: number = 0;
  valueCalculateMultplier: number = 0;

  constructor(private formBuilder: FormBuilder) { }

  getResult() {
    if (!this.form.valid) {
      this.valueRequired = 'Campo vazio ou inválido!'
      this.valueCalculateMultplying = -1;
      this.valueCalculateMultplier = -1;
    } else {

      const values = this.form.value;
      const n1 = values.multiplying;
      const n2 = values.multiplier;

      this.valueRequired = '';
      this.valueCalculateMultplying = n1;
      this.valueCalculateMultplier = n2;
      this.result = !this.result;
    }
  }

  clearForm() {
    this.form.reset();
    this.result = false;
  }

}




