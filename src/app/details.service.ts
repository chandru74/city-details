import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City, GeoCodeData } from './city.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }

  url= 'https://indian-cities-api-nocbegfhqg.now.sh/cities';

  getCityData() : Observable<City[]>{
    return this.http.get<City[]>(this.url)
  }

  getCoordinates(city): Observable<GeoCodeData>{
    return this.http.get<GeoCodeData>("https://maps.googleapis.com/maps/api/geocode/json?address=" + city +"&key=AIzaSyCOKYU4Tgwp18z9Aghtwgmbq92WdJQEpaY")
  }
}
