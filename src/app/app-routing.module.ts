import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailiesComponent } from './pages/dailies/dailies.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { PlaygroundComponent } from './pages/playground/playground.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dailies',
    pathMatch: "full"
  },
  {
    path: 'dailies',
    component: DailiesComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'playground',
    component: PlaygroundComponent
  },
  {
    path: '**',
    redirectTo: '/dailies'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
