import { CalcSqrComponent } from './calc-sqr/calc-sqr.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { CalcMultiplicationComponent } from '../calc-multiplication/calc-multiplication/calc-multiplication.component';

 export const  routes: Routes = [
  { path: '', component: CalcSqrComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalcSqrRoutingModule { }
