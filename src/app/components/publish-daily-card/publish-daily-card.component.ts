import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Daily } from 'src/app/models/classes/daily';
import { ClockService } from 'src/app/services/clock.service';
import { emotionsSeed } from 'src/utils/seed';

@Component({
  selector: 'app-publish-daily-card',
  templateUrl: './publish-daily-card.component.html',
  styleUrl: './publish-daily-card.component.css'
})

export class PublishDailyCardComponent implements OnInit {
  @Output('nuevoDaily') dailyEmitter = new EventEmitter<Daily>()

  clockNow: Date = new Date()
  todayDaily: Daily = new Daily()
  emotionsCatalog: string[] = emotionsSeed

  constructor(private clockService: ClockService) {

  }

  ngOnInit(): void {
    this.clockService.getClock().subscribe((clockNow) => {
      this.clockNow = clockNow
    })
  }

  publishDaily() {
    this.dailyEmitter.emit(this.todayDaily)
    this.todayDaily = new Daily()
  }
}
