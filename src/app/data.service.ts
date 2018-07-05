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

  //URL to tech stories
  private techStories: string = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0ab09f545d204281a59195d5f70510fe"

  //URL to sports News
  private sportsNews: string = "https://newsapi.org/v2/top-headlines?sources=bleacher-report&apiKey=0ab09f545d204281a59195d5f70510fe"

  //worldNews
  private worldNews = "https://newsapi.org/v2/top-headlines?sources=bloomberg&apiKey=0ab09f545d204281a59195d5f70510fe"

  //Business News
  private businessNews: string = "https://newsapi.org/v2/top-headlines?sources=business-insider-uk&apiKey=0ab09f545d204281a59195d5f70510fe"

  //science news
  private scienceNews: string = "https://newsapi.org/v2/top-headlines?sources=wired&apiKey=0ab09f545d204281a59195d5f70510fe"

  //inject HttpClient
  constructor( private http: HttpClient) {}

  //get topstories response
  getTopStories(){
    return this.http.get<stories>(this.topStories);
  }

  //Tech stories
  getTechStories(){
    return this.http.get<any>(this.techStories);
  }

  //sports news
  getSportsNews(){
    return this.http.get<any>(this.sportsNews);
  }

  //get worldnews
  getWorldNews(){
    return this.http.get<any>(this.worldNews);
  }

  //business news
  getBusinessNews(){
    return this.http.get<any>(this.businessNews);
  }

  //get science news
  getScienceNews(){
    return this.http.get<any>(this.scienceNews);
  }
}
 