import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { LocalNewsComponent } from './local-news/local-news.component';
import { WorldNewsComponent } from './world-news/world-news.component';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { TechnologyComponent } from './technology/technology.component';
import { SportsComponent } from './sports/sports.component';
import { ScienceComponent } from './science/science.component';
import { HealthComponent } from './health/health.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    LocalNewsComponent,
    WorldNewsComponent,
    BusinessComponent,
    EntertainmentComponent,
    TechnologyComponent,
    SportsComponent,
    ScienceComponent,
    HealthComponent,
    TopStoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
