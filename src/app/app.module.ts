import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { PrivatePartiesPageComponent } from './private-parties-page/private-parties-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'menu', component: MenuPageComponent},
  {path: 'private-parties', component: PrivatePartiesPageComponent},
  {path: 'contact-us', component: ContactUsPageComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MenuPageComponent,
    PrivatePartiesPageComponent,
    ContactUsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{

 }
