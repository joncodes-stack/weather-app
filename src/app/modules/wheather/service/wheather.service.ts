import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WheatherService {
  private apiKey = 'a20f080188780155914c6540e7e31b67'
constructor(private http: HttpClient) {}

getWheather(cityName: string): Observable<any>{
  return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},br&APPID=${this.apiKey}`,{})
}



}
