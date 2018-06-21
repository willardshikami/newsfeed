import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreakingNewsComponent } from './breaking-news/breaking-news.component';
import { LocalNewsComponent } from './local-news/local-news.component';
import { WorldNewsComponent } from './world-news/world-news.component';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { TechnologyComponent } from './technology/technology.component';
import { SportsComponent } from './sports/sports.component';
import { ScienceComponent } from './science/science.component';
import { HealthComponent } from './health/health.component';

const routes: Routes = [
  {
    path: "",
    component: BreakingNewsComponent
  },
  {
    path: "local-news",
    component: LocalNewsComponent
  },
  {
    path: "world-news",
    component: WorldNewsComponent
  },
  {
    path: "business",
    component: BusinessComponent
  },
  {
    path: "entertainment",
    component: EntertainmentComponent
  },
  {
    path: "technology",
    component: TechnologyComponent
  },
  {
    path: "sports",
    component: SportsComponent
  },
  {
    path: "science",
    component: ScienceComponent
  },
  {
    path: "health",
    component: HealthComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
