import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

//stories interface
interface stories{
  articles: Object
}


@Injectable({
  providedIn: 'root'
})

export class DataService {

  //URL to world top stories
  private topStories: string = "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=0ab09f545d204281a59195d5f70510fe";

  //inject HttpClient
  constructor( private http: HttpClient) {}

  //get topstories response
  getTopStories(){
    return this.http.get<stories>(this.topStories)
  }
}
 