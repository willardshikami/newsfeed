import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  techStories: any

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTechStories()
    .subscribe(
      data => this.techStories = data.articles,
      error => console.log(error)
    )
  }

}
