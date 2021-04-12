import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/menu';
import { Restaurant } from '../interfaces/restaurant';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
base_url = 'http://localhost:3000/api/'

constructor(private http: HttpClient) {}

getRestaurant() {
  return this.http.get<Restaurant>(`${this.base_url}restaurant`)
}

getMenu(){
  return this.http.get<MenuItem[]>(`${this.base_url}menu`)
}

}
