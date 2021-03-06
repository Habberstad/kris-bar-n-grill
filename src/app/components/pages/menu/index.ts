import { RecommendationBarModule } from './../../shared/components/recommendation-bar/index';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';

@NgModule({
  imports: [CommonModule, RouterModule, RecommendationBarModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class MenuModule {}
