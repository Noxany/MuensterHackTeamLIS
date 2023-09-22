import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TinderComponent } from './activities/tinder/tinder.component';
import { SearchComponent } from './activities/search/search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'activities/tinder', component: TinderComponent },
  { path: 'activities/overview', component: SearchComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // This is an optional default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
