import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailiesComponent } from './pages/dailies/dailies.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { PublishDailyCardComponent } from './components/publish-daily-card/publish-daily-card.component';
import { InfoDailyCardComponent } from './components/info-daily-card/info-daily-card.component';
import { FormsModule } from '@angular/forms';
import { BottomNavbarComponent } from './components/bottom-navbar/bottom-navbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DailiesComponent,
    PlaygroundComponent,
    TasksComponent,
    PublishDailyCardComponent,
    InfoDailyCardComponent,
    BottomNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
