import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MultiplieTablePipe } from '../../pipes/multiplie-table.pipe';

@Component({
  selector: 'app-multiplication-table',
  standalone: true,
  imports: [FormsModule, MatIcon, MultiplieTablePipe, NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './multiplication-table.component.html',
  styleUrl: './multiplication-table.component.css'
})
export class MultiplicationTableComponent {

  pageTitle: string = 'Make It Simple: Modúlo Tabuada';
  valueRequired = '';
  form: FormGroup = this.formBuilder.group({
    numero: ['', Validators.required]
  });
  result: boolean = false;
  valueCalculateTable = 0;


  constructor(private formBuilder: FormBuilder) {

  }

  getResult() {
    if (!this.form.valid) {
      this.valueRequired = 'Campo vazio ou inválido!'
      this.valueCalculateTable = -1;
      console.log(this.form.value);
    } else {

      const n = this.form.value;
      this.valueRequired = '';
      this.valueCalculateTable = n.numero;
      this.result = !this.result;
    }

  }
  clearForm() {
    this.form.reset();
    this.result = false;
  }
}
