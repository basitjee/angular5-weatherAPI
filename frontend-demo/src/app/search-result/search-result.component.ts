import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit,OnChanges {

  public location: string;
  constructor(private route: ActivatedRoute, private weatherService: WeatherService) {
    // this.route.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  ngOnInit() {

    this.route.params.subscribe((params)=> {
      this.location = params['keyword'];
    });
    // if(keyword) {
    //   this.location = keyword;
    //   // this.weatherService.searchLocationWoeId(keyword, (cr, re)=> {
    //   //   this.
    //   // })
    // }

  }

  ngOnChanges() {
    console.log("Change event occured");
    // let keyword = this.route.snapshot.paramMap.get('keyword');
    // if(keyword) {
    //   this.location = keyword;
    //   // this.weatherService.searchLocationWoeId(keyword, (cr, re)=> {
    //   //   this.
    //   // })
    // }
  }

}
