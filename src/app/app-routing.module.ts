import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuItemComponent } from './components/pages/menu-item/menu-item.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { RestaurantComponent } from './components/pages/restaurant/restaurant.component';

const routes: Routes = [
  {
    path: 'restaurant',
    component: RestaurantComponent
  },
  {
    path: 'menu',
    children: [
      {
        path: '',
        component: MenuComponent,
      },
      {
        path: ':id',
        component: MenuItemComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'restaurant',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
