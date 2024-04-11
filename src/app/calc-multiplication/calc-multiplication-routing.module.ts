import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcMultiplicationComponent } from './calc-multiplication/calc-multiplication.component';

const routes: Routes = [
  {path: '',
  component: CalcMultiplicationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalcMultiplicationRoutingModule { }
