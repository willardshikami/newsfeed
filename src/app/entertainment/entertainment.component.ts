import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  entertainment: any

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getEntertainmentNews()
    .subscribe(
      data => this.entertainment = data.articles,
      error => console.log(error)
    )
  }

}
