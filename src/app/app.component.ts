import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CalcMultiplicationRoutingModule } from './calc-multiplication/calc-multiplication-routing.module';
import { CalcSqrRoutingModule } from './calc-sqr/calc-sqr-routing.module';
import { FooterComponent } from './footer/footer.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalcMultiplicationRoutingModule, CalcSqrRoutingModule, MatIconModule, FooterComponent, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MakeItSimple';

  sidebarItems: {label: string; link: string; }[] = [
    {label: 'Multiplicação', link: '/multiple'},
    {label: 'Raiz Quadrada', link: '/sqrt'},
    {label: 'Sobre', link: '/about'}
  ];
  menuValue: boolean = false;
  active: string = ''

  constructor(private router: Router) {

    console.info(router.getCurrentNavigation.name);
    this.sidebarItems.forEach(item=>{
      if(router.navigateByUrl.name){

      }
    })

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


