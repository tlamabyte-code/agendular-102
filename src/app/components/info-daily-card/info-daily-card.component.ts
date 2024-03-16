import { Component, Input } from '@angular/core';
import { Daily } from 'src/app/models/classes/daily';

@Component({
  selector: 'app-info-daily-card',
  templateUrl: './info-daily-card.component.html',
  styleUrl: './info-daily-card.component.css'
})

export class InfoDailyCardComponent {
  @Input('dailyInfo') daily: Daily = new Daily()
}
