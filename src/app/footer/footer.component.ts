import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
// declare function getYear():any;

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  year: any;
  constructor(){

  }
  ngOnInit(){
    this.year = new Date().getFullYear();
  }
}
