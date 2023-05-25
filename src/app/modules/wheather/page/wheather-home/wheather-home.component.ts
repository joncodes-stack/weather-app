import { Component, OnInit } from '@angular/core';
import { WheatherService } from '../../service/wheather.service';
import { Wheather } from 'src/app/models/interfaces/wheather';

@Component({
  selector: 'app-wheather-home',
  templateUrl: './wheather-home.component.html',
  styleUrls: []
})
export class WheatherHomeComponent implements OnInit {
  initialCityName = 'Rio de Janeiro';
  wheather!: Wheather;
  constructor(private wheatherService: WheatherService) { }

  ngOnInit() {
    this.getWheatherDatas(this.initialCityName)
  }

  getWheatherDatas(cityName: string): void {
    this.wheatherService.getWheather(cityName).subscribe({
      next: (response) => {
        response && (this.wheather = response)
        console.log(this.wheather);
      },
      error: (error) => console.log(error)
    })
  }

}
