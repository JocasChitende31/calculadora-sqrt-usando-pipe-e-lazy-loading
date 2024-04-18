import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { PlusMinusPipe } from '../../pipes/plus-minus.pipe';

@Component({
  selector: 'app-calc-plus-minus',
  standalone: true,
  imports: [NgIf, FormsModule, MatIcon, PlusMinusPipe, ReactiveFormsModule],
  templateUrl: './calc-plus-minus.component.html',
  styleUrl: './calc-plus-minus.component.css'
})
export class CalcPlusMinusComponent {

  plusTitle: string = 'Make It Simple: Modúlo Soma';
  minusTitle: string = 'Make It Simple: Modúlo Subtração';
  pageTitle: string = 'Make It Simple: Modúlo Soma & Subtração';
  signalPlus: string = '+';
  signalMinus: string = '-';

  form: FormGroup = this.formBuilder.group({

    numOne: ['', Validators.required],
    numTwo: ['', Validators.required]
  })
  valueRequired: string = '';
  result: boolean = false;
  // result2: boolean = false;
  valueCalculateOne: number = 0;
  valueCalculateTwo: number = 0;

  plus: boolean = false;
  minus: boolean = false;

  constructor( private formBuilder: FormBuilder) {

  }

  showPlusForm() {
    this.minusTitle = '';
    this.plus = !this.plus;
    this.minus = false;

    this.pageTitle = 'Make It Simple: Modúlo Soma ';
  }

  showMinusForm() {
    this.minus = !this.minus;
    this.plus = false;

    this.pageTitle = 'Make It Simple: Modúlo Subtração';
  }

  getResult() {
    if (!this.form.valid) {
      this.valueRequired = 'Campo vazio ou inválido!'
      this.valueCalculateOne = -1;
      this.valueCalculateTwo = -1;
    } else {

      const values = this.form.value;
      const n1 = values.numOne;
      const n2 = values.numTwo;

      this.valueRequired = '';
      this.valueCalculateOne = n1;
      this.valueCalculateTwo = n2;
      this.result = !this.result;
    }
  }

  clearForm() {
    this.form.reset();
    this.result = false;
  }
}
