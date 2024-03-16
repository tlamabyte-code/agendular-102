import { Component } from '@angular/core';
import { Daily } from 'src/app/models/classes/daily';

@Component({
  selector: 'app-dailies',
  templateUrl: './dailies.component.html',
  styleUrl: './dailies.component.css'
})
export class DailiesComponent {
  // sampleDaily: Daily = {
  //   id: 1,
  //   note: 'Hola Mundo'
  // } 

  myDailies: Daily[] = []

  handlerDailyEmitted(daily: Daily): void {
    this.myDailies.push(daily)
  }
}
