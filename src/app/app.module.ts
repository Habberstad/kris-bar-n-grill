import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './components/pages/menu';
import { MenuItemModule } from './components/pages/menu-item';
import { RestaurantModule } from './components/pages/restaurant';
import { NavigationModule } from './components/shared/components/navigation/index';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenuModule,
    MenuItemModule,
    RestaurantModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}