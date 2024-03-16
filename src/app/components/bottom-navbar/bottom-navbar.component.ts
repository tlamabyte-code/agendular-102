import { Component, OnInit } from '@angular/core';
import { ClockService } from 'src/app/services/clock.service';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrl: './bottom-navbar.component.css'
})
export class BottomNavbarComponent implements OnInit {

  clockNow: Date = new Date() 

  constructor(private clockService: ClockService) {

  }

  ngOnInit(): void {
      this.clockService.getClock().subscribe((clockNow) => {
        this.clockNow = clockNow
      })
  }
}
