import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AboutModule } from './about/about.module';
import { CalcMultiplicationRoutingModule } from './calc-multiplication/calc-multiplication-routing.module';
import { CalcSqrRoutingModule } from './calc-sqr/calc-sqr-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalcMultiplicationRoutingModule, CalcSqrRoutingModule, MatIconModule,AboutModule, HeaderComponent,FooterComponent, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MakeItSimple';


}


