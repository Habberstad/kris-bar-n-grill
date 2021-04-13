import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menu';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'recommendation-bar',
  templateUrl: './recommendation-bar.component.html',
  styleUrls: ['./recommendation-bar.component.scss'],
})
export class RecommendationBarComponent implements OnInit {
  @Input() menu: MenuItem[] = [];

  constructor() {}

  ngOnInit() {}
}
