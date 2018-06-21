import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  posts: any;

  constructor( private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getPosts()
    .subscribe(
      data => {
        this.posts = data.articles;
      }
    )
  }
}
