import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public keyword:string;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  public search() {
    this.router.navigate(['/']);
    console.log(this.keyword);

    if(this.keyword && this.keyword.trim().length > 0) {
      this.router.navigate(['/search', this.keyword]);
    }
  }

  public onKeydown(e) {
    this.search();
  }

}
