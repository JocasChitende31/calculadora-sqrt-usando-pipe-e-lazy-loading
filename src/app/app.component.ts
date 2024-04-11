import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CalcMultiplicationRoutingModule } from './calc-multiplication/calc-multiplication-routing.module';
import { CalcSqrRoutingModule } from './calc-sqr/calc-sqr-routing.module';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalcMultiplicationRoutingModule, CalcSqrRoutingModule,MatIconModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'MakeItSimple';



  constructor() {

  }
  ngOnInit() {

  }

}


