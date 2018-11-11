import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// stories interface
interface Stories {
  articles: {};
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  // URL to world top stories
  private topStoriesUrl =
    'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=0ab09f545d204281a59195d5f70510fe';

  // URL to tech stories
  private techStoriesUrl =
    'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0ab09f545d204281a59195d5f70510fe';

  // URL to sports News
  private sportsNewsUrl =
    'https://newsapi.org/v2/top-headlines?sources=bleacher-report&apiKey=0ab09f545d204281a59195d5f70510fe';

  // worldNews
  private worldNewsUrl =
    'https://newsapi.org/v2/top-headlines?sources=bloomberg&apiKey=0ab09f545d204281a59195d5f70510fe';

  // Business News
  private businessNewsUrl =
    'https://newsapi.org/v2/top-headlines?sources=business-insider-uk&apiKey=0ab09f545d204281a59195d5f70510fe';

  // science news
  private scienceNewsUrl =
    'https://newsapi.org/v2/top-headlines?sources=new-scientist&apiKey=0ab09f545d204281a59195d5f70510fe';

  private entertaimentUrl =
  'https://newsapi.org/v2/top-headlines?sources=entertainment-weekly&apiKey=0ab09f545d204281a59195d5f70510fe';

  private medicalUrl = 'https://newsapi.org/v2/top-headlines?sources=medical-news-today&apiKey=0ab09f545d204281a59195d5f70510fe';

  // inject HttpClient
  constructor(private http: HttpClient) { }

  // get topstories response
  getTopStories() {
    return this.http.get<Stories>(this.topStoriesUrl);
  }

  // Tech stories
  getTechStories() {
    return this.http.get<Stories>(this.techStoriesUrl);
  }

  // sports news
  getSportsNews() {
    return this.http.get<Stories>(this.sportsNewsUrl);
  }

  // get worldnews
  getWorldNews() {
    return this.http.get<Stories>(this.worldNewsUrl);
  }

  // business news
  getBusinessNews() {
    return this.http.get<Stories>(this.businessNewsUrl);
  }

  // get science news
  getScienceNews() {
    return this.http.get<Stories>(this.scienceNewsUrl);
  }

  // get Entertainment News
  getEntertainmentNews() {
    return this.http.get<Stories>(this.entertaimentUrl);
  }

  // medical news
  getMedicalNews() {
    return this.http.get<Stories>(this.medicalUrl);
  }
}
