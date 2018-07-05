import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  healthnews: any

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getMedicalNews()
    .subscribe(
      data => this.healthnews = data.articles,
      error => console.log(error)
    )
  }

}
