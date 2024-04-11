import { Component } from '@angular/core';
import {MatIcon, MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, MatIcon],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
