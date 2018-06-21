import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from "./material.module";

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
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
    //BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
