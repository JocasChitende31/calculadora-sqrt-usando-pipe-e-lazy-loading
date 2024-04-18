import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiplicationTableComponent } from './multiplication-table/multiplication-table.component';

const routes: Routes = [
  { path: '', component: MultiplicationTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiplieTableRoutingModule { }
