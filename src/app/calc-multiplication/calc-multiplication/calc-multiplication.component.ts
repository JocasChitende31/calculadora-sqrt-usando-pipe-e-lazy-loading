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

  result: boolean = false;
  

  multiplying = 0;
  multiplier = 0;
  arg = [this.multiplying,this.multiplier]

  form: FormGroup = this.formBuilder.group({
    multiplying: ['', Validators.required],
    multiplier: ['', Validators.required]
  })
  constructor(private formBuilder: FormBuilder) { }

  getResult() {
    const values = this.form.value;
    const n1 = values.multiplying;
    const n2 = values.multiplier;
    this.multiplying = n1;
    this.multiplier = n2;
    this.result = !this.result;

    console.log(n1 * n2);
  }

  clearForm() {
    this.form.reset();
    this.result = false;
  }
}




