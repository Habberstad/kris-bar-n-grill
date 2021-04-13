import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item.component';
import { RecommendationBarModule } from '../../shared/components/recommendation-bar';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RecommendationBarModule,
    RouterModule
  ],
  declarations: [MenuItemComponent],
  exports: [MenuItemComponent]
})
export class MenuItemModule { }
