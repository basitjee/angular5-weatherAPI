import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherService } from './weather.service';

interface WI{
  id: string,
  min_temp: number,
  max_temp: number,
  the_temp: number,
  weather_state_name: string
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit,OnChanges {

  public wInfo: any;
  public hasError: boolean;
  public responseMessage: string;
  @Input() name: string;
  public woeid;

  constructor(private weatherService: WeatherService) { 
    this.responseMessage = "Loading..."
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.weatherService.searchLocationWoeId(this.name,(wi:any, result:any)=>{
      if(result.hasOwnProperty("woeid")) {
        this.wInfo = wi;
        this.wInfo.applicable_date = new Date(this.wInfo.applicable_date).getTime();
        this.woeid = result.woeid;
      }else {
        this.hasError = true;
        this.responseMessage = "Location not found";
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("changes", changes);
    this.name = changes.name.currentValue;
    this.wInfo = null;
    this.woeid = null;
    this.loadData();
  }

}
