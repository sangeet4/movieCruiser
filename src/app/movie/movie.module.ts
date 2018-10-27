import { AppComponent } from './../app.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { CardsGridComponent } from './cards-grid/cards-grid.component';
import { SearchmovieComponent } from './searchmovie/searchmovie.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { ShareService } from './share.service';
import { AboutComponent } from './about/about.component';


// angularMaterial Module import statements
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie.component';
import { CardsDetailComponent } from './cards-detail/cards-detail.component';

const appRoutes : Routes = [
  { path:'home', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'home/cardDetail/:movie',component: CardsDetailComponent },
  { path: '', component: AppComponent },
  { path: '**', redirectTo: '/', pathMatch:'full' }
]

@NgModule({
  declarations: [
    MovieListComponent,
    AppNavbarComponent,
    FooterComponent,
    CardsComponent,
    CardsGridComponent,
    SearchmovieComponent,
    SearchbarComponent,
    AboutComponent,
    HomeComponent,
    MovieComponent,
    CardsDetailComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    MovieListComponent,
    AppNavbarComponent,
    FooterComponent,
    CardsComponent,
    CardsGridComponent,
    SearchmovieComponent,
    SearchbarComponent,
    MovieComponent
  ],
  providers:[ ShareService ]
})

export class MovieModule {}