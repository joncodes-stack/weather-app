import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WheatherHomeComponent } from './weather-home.component';
import { WheatherCardComponent } from '../../components/wheather-card/weather-card.component';


@NgModule({
  declarations: [WheatherHomeComponent,WheatherCardComponent],
  imports: [CommonModule, FontAwesomeModule, FormsModule]
})
export class WeatherModule {}
