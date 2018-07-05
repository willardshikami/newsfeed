import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  sciencenews: any

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getScienceNews()
    .subscribe(
      data => this.sciencenews = data.articles,
      error => console.log(error)
    )
  }

}
