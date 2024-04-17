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
  numInput: number = -1;

  sms: string = '';


  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit() {

  }
  getResult() {
    const result = this.form.value;
    if (result.numero === null) {
      this.sms = "Por Favor! Digite apenas números, \ne antes disso, click em Reset Form \npara limpar o formulário.";
    }
    this.numInput = result.numero;
    this.result = !this.result;
  }
  resetForm() {
    this.form.reset();
    this.sms = "";
    this.numInput = -1;
  }

  clearForm() {
    this.form.reset();
    this.result = false;
    this.numInput = -1;
  }
}
