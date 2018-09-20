import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { WeatherService } from './weather/weather.service';
import { HomeComponent } from './home/home.component';
import { Router,RouterModule } from '@angular/router';
import { WeatherdetailsComponent } from './weatherdetails/weatherdetails.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { MomentformatPipe } from './momentformat.pipe';


const routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full',useAsDefault: true
  },
  {
    path: 'home', component: HomeComponent,useAsDefault: true
  },
  {
    path: 'weather/:woeid', component: WeatherdetailsComponent
  },
  {
    path: 'search/:keyword', component: SearchResultComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HomeComponent,
    WeatherdetailsComponent,
    SearchComponent,
    SearchResultComponent,
    MomentformatPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
