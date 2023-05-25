import { Component, OnDestroy, OnInit } from '@angular/core';
import { WheatherService } from '../../service/weather.service';
import { Wheather } from 'src/app/models/interfaces/weather';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WheatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  initialCityName = 'Rio de Janeiro';
  weather!: Wheather;
  searchIcon = faMagnifyingGlass

  constructor(private wheatherService: WheatherService) { }

  ngOnInit() {
    this.getWheatherDatas(this.initialCityName)
  }

  getWheatherDatas(cityName: string): void {
    this.wheatherService
      .getWheather(cityName)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
      next: (response) => {
        response && (this.weather = response)
        console.log(this.weather);
      },
      error: (error) => console.log(error)
    })
  }

  onSubmit(): void {
    this.getWheatherDatas(this.initialCityName);
    this.initialCityName = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
