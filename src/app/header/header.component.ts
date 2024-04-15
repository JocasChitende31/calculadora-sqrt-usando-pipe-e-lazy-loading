import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CalcMultiplicationModule } from '../calc-multiplication/calc-multiplication.module';
import { CalcSqrModule } from '../calc-sqr/calc-sqr.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIcon, NgFor, NgIf, CalcMultiplicationModule, CalcSqrModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  sidebarItems: {label: string, link: string }[] = [
    {label: 'Multiplicação', link: 'multiple'},
    {label: 'Raiz Quadrada', link: 'sqrt'},
    {label: 'Sobre', link: 'about'}
  ];

  menuValue: boolean = false;
  color: string = 'active'

  constructor(private router: Router) {

  }
  ngOnInit() {

  }

  openMenu(): void{
    this.menuValue = !this.menuValue;

  }

  closeMenu(): void{
    this.menuValue = false;
  }
}
