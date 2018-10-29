import { MovieModule } from '../app/movie/movie.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './movie/about/about.component';
import { HomeComponent } from './movie/home/home.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    MovieModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes)
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
