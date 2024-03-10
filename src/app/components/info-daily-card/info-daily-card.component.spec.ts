import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDailyCardComponent } from './info-daily-card.component';

describe('InfoDailyCardComponent', () => {
  let component: InfoDailyCardComponent;
  let fixture: ComponentFixture<InfoDailyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoDailyCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoDailyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
