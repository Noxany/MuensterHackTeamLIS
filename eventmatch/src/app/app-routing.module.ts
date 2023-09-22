import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TinderComponent } from './activities/tinder/tinder.component';
import { SearchComponent } from './activities/search/search.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'activities/overview', component: OverviewComponent},
  { path: 'activities/tinder', component: TinderComponent },
  { path: 'activities/search', component: SearchComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // This is an optional default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
