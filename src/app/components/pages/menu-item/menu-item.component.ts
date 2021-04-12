import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  menuItemId: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.getMenuItemIdFromRouteParam();
  }

  getMenuItemIdFromRouteParam() {
    this.menuItemId = this.route.snapshot.params?.id;
  }


}
