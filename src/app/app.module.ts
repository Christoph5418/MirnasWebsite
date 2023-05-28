import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { OrderOnlinePageComponent } from './order-online-page/order-online-page.component';
import { PrivatePartiesPageComponent } from './private-parties-page/private-parties-page.component';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'menu', component: MenuPageComponent},
  {path: 'order-online', component: OrderOnlinePageComponent},
  {path: 'private-parties', component: PrivatePartiesPageComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MenuPageComponent,
    OrderOnlinePageComponent,
    PrivatePartiesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
