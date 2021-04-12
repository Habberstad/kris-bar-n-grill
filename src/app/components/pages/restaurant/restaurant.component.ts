import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../shared/interfaces/restaurant';
import { RestaurantService } from '../../shared/services/restaurant.service';



@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  restaurant: Restaurant;

  constructor(private service: RestaurantService) { }

  ngOnInit() {
    this.fetchRestaurantData();
  }

  fetchRestaurantData() {
    this.service.getRestaurant().subscribe((res) => {
      this.restaurant = res;
    })
  }

}
