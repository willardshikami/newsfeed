import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  businessnews: any

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getBusinessNews()
    .subscribe(
      data => this.businessnews = data.articles,
      error => console.log(error)
    )
  }

}
