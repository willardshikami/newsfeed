import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


interface headlines{
  articles: Object
}


@Injectable({
  providedIn: 'root'
})

export class DataService {

  private newsApi: string = "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=0ab09f545d204281a59195d5f70510fe";

  constructor( 
    private http: HttpClient) { }

  getPosts(){
    return this.http.get<headlines>(this.newsApi)
      
  }
}
 