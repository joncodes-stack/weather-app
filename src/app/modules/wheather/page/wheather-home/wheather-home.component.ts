import { Component, OnInit } from '@angular/core';
import { WheatherService } from '../../service/wheather.service';

@Component({
  selector: 'app-wheather-home',
  templateUrl: './wheather-home.component.html',
  styleUrls: []
})
export class WheatherHomeComponent implements OnInit {
  initialCityName = 'Rio de Janeiro';
  constructor(private wheatherService: WheatherService) { }

  ngOnInit() {
    this.getWheatherDatas(this.initialCityName)
  }

  getWheatherDatas(cityName: string): void {
    this.wheatherService.getWheather(cityName).subscribe({
      next: (reponse) => {
        console.log(reponse);
      },
      error: (error) => console.log(error)
    })
  }

}
