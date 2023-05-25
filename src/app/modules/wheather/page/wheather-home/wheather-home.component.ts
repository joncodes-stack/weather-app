import { Component, OnDestroy, OnInit } from '@angular/core';
import { WheatherService } from '../../service/wheather.service';
import { Wheather } from 'src/app/models/interfaces/wheather';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wheather-home',
  templateUrl: './wheather-home.component.html',
  styleUrls: []
})
export class WheatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  initialCityName = 'Rio de Janeiro';
  wheather!: Wheather;
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
        response && (this.wheather = response)
        console.log(this.wheather);
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
