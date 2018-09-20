import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'weatherapp';
  information = null;

  constructor() {
    
  }

  ngOnInit(): void {
   
  }
}
