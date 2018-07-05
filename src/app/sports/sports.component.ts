import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  sportsNews: any

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getSportsNews()
    .subscribe(
      data => this.sportsNews = data.articles
    )
  }

}
