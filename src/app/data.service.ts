import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


interface stories{
  articles: Object
}


@Injectable({
  providedIn: 'root'
})

export class DataService {

  private topStories: string = "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=0ab09f545d204281a59195d5f70510fe";

  constructor( 
    private http: HttpClient) { }

  //Top Stories
  getTopStories(){
    return this.http.get<stories>(this.topStories)
  }
}
 