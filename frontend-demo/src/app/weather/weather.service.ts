import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  static BASEURL = "http://localhost/weather/weather.php?command=";
  constructor(private http: HttpClient) { }

  public get(woeid:number) {
    console.log("calling with weather ID ", woeid);
    return this.http.get("http://localhost/weather/weather.php?command=location&woeid="+woeid);
  }

  public searchLocationWoeId(name: string,cb) {
    this.http.get(WeatherService.BASEURL+"search&keyword="+name)
    .toPromise()
    .then((location:any) => {
      console.log("Got Location ", location[0]);
      if(location && location[0] && location[0].woeid) {
        this.get(location[0].woeid).toPromise()
          .then((result:any)=> {
            console.log("Final ", result);
            cb(result.consolidated_weather[1],result);
          })
          .catch((err) => {
            console.log(err);
          });
      }else {
        cb(null, {});
      }
    })
    .catch();
  }

}
