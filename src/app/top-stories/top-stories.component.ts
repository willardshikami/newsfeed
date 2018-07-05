import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']
})
export class TopStoriesComponent implements OnInit {

  //declare an empty stories var
  private _stories: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //loading the response from the service and subscribing to it to display the data on the components
    this.dataService.getTopStories()
    .subscribe(
      data => this._stories = data.articles,
      error => console.log(error)
    )
  }

}
