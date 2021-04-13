import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItem, MenuItemBase } from '../interfaces/menu';
import { Restaurant } from '../interfaces/restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  base_url = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {}

  getRestaurant() {
    return this.http.get<Restaurant>(`${this.base_url}restaurant`);
  }

  getMenu() {
    return this.http.get<MenuItem[]>(`${this.base_url}menu`);
  }

  getMenuItem(id) {
    return this.http.get<MenuItem>(`${this.base_url}menu/` + id);
  }

  postMenuItem(model: MenuItemBase) {
    return this.http.post<MenuItem>(`${this.base_url}menu/item`, model);
  }

  deleteMenuItem(id: string) {
    return this.http.delete<MenuItem>(`${this.base_url}menu/item/${id}`);
  }
}
