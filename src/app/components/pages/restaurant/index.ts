import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant.component';
import { RecommendationBarModule } from '../../shared/components/recommendation-bar';

@NgModule({
  imports: [
    CommonModule,
    RecommendationBarModule,
  ],
  declarations: [RestaurantComponent],
  exports: [RestaurantComponent]
})
export class RestaurantModule { }
