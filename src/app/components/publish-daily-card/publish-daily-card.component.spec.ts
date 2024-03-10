import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishDailyCardComponent } from './publish-daily-card.component';

describe('PublishDailyCardComponent', () => {
  let component: PublishDailyCardComponent;
  let fixture: ComponentFixture<PublishDailyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublishDailyCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublishDailyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
