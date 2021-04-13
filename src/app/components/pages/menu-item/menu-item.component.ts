import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuItem } from '../../shared/interfaces/menu';
import { RestaurantService } from './../../shared/services/restaurant.service';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit, OnDestroy {
  menuItemId: string;
  menuItem: MenuItem;
  recommendationBarMenu: MenuItem[] = [];
  routeParamSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private service: RestaurantService
  ) {}

  ngOnInit() {
    this.getMenuItemIdFromRouteParam();
    this.fetchMenu();
    this.fetchMenuItem();
  }

  ngOnDestroy() {
    this.routeParamSubscription.unsubscribe();
  }

  getMenuItemIdFromRouteParam() {
    this.routeParamSubscription = this.route.params.subscribe((res) => {
      this.menuItemId = res.id;
      this.fetchMenuItem();
    });
  }

  fetchMenu() {
    this.service.getMenu().subscribe((res) => {
      for (let index = 0; index <= 2; index++)
        this.recommendationBarMenu.push(res[index]);
    });
  }

  fetchMenuItem() {
    this.service.getMenuItem(this.menuItemId).subscribe((res) => {
      this.menuItem = res;
    });
  }
}
