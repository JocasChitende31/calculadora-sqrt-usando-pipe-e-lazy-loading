import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SqrtPipe } from '../../sqrt.pipe';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-calc-sqr',
  standalone: true,
  imports: [FormsModule, MatIcon, NgIf, SqrtPipe, ReactiveFormsModule, RouterOutlet],
  templateUrl: './calc-sqr.component.html',
  styleUrl: './calc-sqr.component.css'
})
export class CalcSqrComponent {

  pageTitle = 'Make It Simple: Modúlo Raiz Quadrada';

  result: boolean = false;

  form: FormGroup = this.formBuilder.group({
    numero: ['', Validators.required]
  });
  valueRequired: string = '';
  valueCalculateSqrt: number = 0;

  sms: string = '';


  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit() {

  }
  getResult() {
    if (!this.form.valid) {
      this.valueRequired = 'Campo vazio ou inválido!'
      this.valueCalculateSqrt = -1;
      console.log(this.form.value);
    } else {

      const n = this.form.value;
      this.valueRequired = '';
      this.valueCalculateSqrt = n.numero;
      this.result = !this.result;
    }

  }

  clearForm() {
    this.form.reset();
    this.result = false;
  }

}
