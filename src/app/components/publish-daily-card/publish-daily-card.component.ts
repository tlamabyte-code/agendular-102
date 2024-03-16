import { Component, EventEmitter, Output } from '@angular/core';
import { Daily } from 'src/app/models/classes/daily';
import { emotionsSeed } from 'src/utils/seed';

@Component({
  selector: 'app-publish-daily-card',
  templateUrl: './publish-daily-card.component.html',
  styleUrl: './publish-daily-card.component.css'
})

export class PublishDailyCardComponent {
  @Output('nuevoDaily') dailyEmitter = new EventEmitter<Daily>()

  todayDaily: Daily = new Daily()
  emotionsCatalog: string[] = emotionsSeed

  publishDaily() {
    this.dailyEmitter.emit(this.todayDaily)
    this.todayDaily = new Daily()
  }
}
