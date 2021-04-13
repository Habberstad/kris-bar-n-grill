import { RestaurantService } from './../../shared/services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../shared/interfaces/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menu: MenuItem[] = [];

  constructor(private service: RestaurantService) {}

  ngOnInit() {
    this.fetchMenu();
  }

  fetchMenu() {
    this.service.getMenu().subscribe((res) => {
      this.menu = res;
    });
  }
}
