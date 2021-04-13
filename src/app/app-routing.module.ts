import { NewMenuItemComponent } from './components/pages/new-menu-item/new-menu-item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuItemComponent } from './components/pages/menu-item/menu-item.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { RestaurantComponent } from './components/pages/restaurant/restaurant.component';

const routes: Routes = [
  {
    path: 'restaurant',
    component: RestaurantComponent,
  },
  {
    path: 'menu',
    children: [
      {
        path: '',
        component: MenuComponent,
      },
      {
        path: 'new',
        component: NewMenuItemComponent,
      },
      {
        path: ':id',
        component: MenuItemComponent,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'restaurant',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
