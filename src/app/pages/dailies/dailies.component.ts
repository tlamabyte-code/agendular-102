import { Component } from '@angular/core';
import { Daily } from '../../interfaces/daily';

@Component({
  selector: 'app-dailies',
  templateUrl: './dailies.component.html',
  styleUrl: './dailies.component.css'
})
export class DailiesComponent {
  sampleDaily: Daily = {
    id: 1,
    note: 'Hola Mundo'
  } 
}
