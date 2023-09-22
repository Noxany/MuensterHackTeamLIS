import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { TinderComponent } from './activities/tinder/tinder.component';
import { SearchComponent } from './activities/search/search.component';
import { OverviewComponent } from './overview/overview.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { SpecificCardComponent } from './specific-card/specific-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TinderComponent,
    SearchComponent,
    OverviewComponent,
    SpecificCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
