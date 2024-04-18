import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcPlusMinusComponent } from './calc-plus-minus/calc-plus-minus.component';

const routes: Routes = [
  {path: '', component: CalcPlusMinusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlusMinusRoutingModule { }
