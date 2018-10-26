import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { CardsGridComponent } from './cards-grid/cards-grid.component';
import { SearchmovieComponent } from './searchmovie/searchmovie.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { ShareService } from './share.service';

@NgModule({
  declarations: [
    MovieListComponent,
    AppNavbarComponent,
    FooterComponent,
    CardsComponent,
    CardsGridComponent,
    SearchmovieComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    FormsModule
  ],
  exports: [
    MovieListComponent,
    AppNavbarComponent,
    FooterComponent,
    CardsComponent,
    CardsGridComponent,
    SearchmovieComponent,
    SearchbarComponent
  ],
  providers:[ ShareService ]
})

export class MovieModule {}