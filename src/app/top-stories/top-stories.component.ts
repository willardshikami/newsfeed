import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']
})
export class TopStoriesComponent implements OnInit {

  _stories: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTopStories()
    .subscribe(
      data => {
        this._stories = data.articles;
      }
    )
  }

}
