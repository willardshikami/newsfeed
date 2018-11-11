import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-world-news',
  templateUrl: './world-news.component.html',
  styleUrls: ['./world-news.component.css']
})
export class WorldNewsComponent implements OnInit {

  worldnews: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getWorldNews()
    .subscribe(
      data => this.worldnews = data.articles
    );
  }
}
