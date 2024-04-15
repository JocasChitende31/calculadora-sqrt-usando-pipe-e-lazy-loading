import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  { path: 'multiple', loadChildren: () => import('./calc-multiplication/calc-multiplication.module').then(m => m.CalcMultiplicationModule) },
  { path: 'sqrt', loadChildren: () => import('./calc-sqr/calc-sqr.module').then(m => m.CalcSqrModule)},
  {path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
  {path: '**', redirectTo: '/home', pathMatch: 'full'},
];
