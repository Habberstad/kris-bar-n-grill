import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../shared/interfaces/menu';
import { Restaurant } from '../../shared/interfaces/restaurant';
import { RestaurantService } from '../../shared/services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {
  restaurant: Restaurant;
  recommendationBarMenu: MenuItem[] = [];

  constructor(private service: RestaurantService) {}

  ngOnInit() {
    this.fetchRestaurantData();
    this.fetchMenu();
  }

  fetchMenu() {
    this.service.getMenu().subscribe((res) => {
      for (let index = 0; index <= 2; index++)
        this.recommendationBarMenu.push(res[index]);
    });
  }

  fetchRestaurantData() {
    this.service.getRestaurant().subscribe((res) => {
      this.restaurant = res;
    });
  }
}
