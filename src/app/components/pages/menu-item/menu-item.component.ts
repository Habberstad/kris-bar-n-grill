import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../../shared/interfaces/menu';
import { RestaurantService } from './../../shared/services/restaurant.service';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  menuItemId: string;
  menuItem: MenuItem;
  constructor(private route: ActivatedRoute, private service: RestaurantService) {}

  ngOnInit() {
    this.getMenuItemIdFromRouteParam();
    this.fetchMenuItem();
  }

  getMenuItemIdFromRouteParam() {
    this.route.params.subscribe((res) => {
      this.menuItemId = res.id
      this.fetchMenuItem()
    })
  }

  fetchMenuItem(){
    this.service.getMenuItem(this.menuItemId).subscribe((res) => {
        this.menuItem = res
    })
  }


}
