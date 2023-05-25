import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WheatherHomeComponent } from './modules/wheather/page/wheather-home/weather-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'wheather',
    pathMatch: 'full'
  },
  {
    path: 'wheather',
    component: WheatherHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
