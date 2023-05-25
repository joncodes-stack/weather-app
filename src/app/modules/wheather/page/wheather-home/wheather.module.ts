import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WheatherHomeComponent } from './wheather-home.component';

@NgModule({
  declarations: [WheatherHomeComponent],
  imports: [CommonModule, FontAwesomeModule, FormsModule]
})
export class WheatherModule {}
