import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationBarComponent } from './recommendation-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [RecommendationBarComponent],
  exports: [RecommendationBarComponent]
})
export class RecommendationBarModule { }
