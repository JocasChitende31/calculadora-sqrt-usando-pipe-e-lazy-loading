import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SqrtPipe } from '../../sqrt.pipe';

@Component({
  selector: 'app-calc-sqr',
  standalone: true,
  imports: [RouterOutlet, SqrtPipe, NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './calc-sqr.component.html',
  styleUrl: './calc-sqr.component.css'
})
export class CalcSqrComponent {
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
  }
  resetForm(){
    this.form.reset();
    this.sms = "";
    this.numInput = -1;
  }
}
