import { Component } from '@angular/core';
// declare function getYear():any;

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
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
