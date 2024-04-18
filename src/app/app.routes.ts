import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'multiple', loadChildren: () => import('./calc-multiplication/calc-multiplication.module').then(m => m.CalcMultiplicationModule) },
  { path: 'plus-minus', loadChildren: () => import('./plus-minus/plus-minus-routing.module').then(m => m.PlusMinusRoutingModule) },
  { path: 'sqrt', loadChildren: () => import('./calc-sqr/calc-sqr.module').then(m => m.CalcSqrModule) },
  { path: 'multiple-table', loadChildren: () => import('./multiplie-table/multiplie-table-routing.module').then(m => m.MultiplieTableRoutingModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
