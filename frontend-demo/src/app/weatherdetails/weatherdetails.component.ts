import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-weatherdetails',
  templateUrl: './weatherdetails.component.html',
  styleUrls: ['./weatherdetails.component.css']
})
export class WeatherdetailsComponent implements OnInit {

  public wInfo:any;
  constructor(private route: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit() {
    console.log(this.route);
    let id = parseInt(this.route.snapshot.paramMap.get('woeid'));

    this.weatherService.get(id).toPromise()
    .then((data)=> {
      this.wInfo = data;
      // for(var i=0;i< this.wInfo.consolidated_weather.length; i++) {
      //   this.wInfo.consolidated_weather[i].applicable_date = new Date(this.wInfo.consolidated_weather[i].applicable_date).getTime();
      // }
    })
    .catch((err) => console.log(err));

  }

  public formatDate(value) {
    return "Name";
  }

}
