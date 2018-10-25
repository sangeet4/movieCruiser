import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [MovieService]
})

export class MovieListComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  public movies={};
  public error;

  ngOnInit() { }

  findByMovieName(name: string) {
    this.movieService.getMovies(name)
      .subscribe(
        data => this.movies = data.results,
        error => this.error = error
      )
  }

  findByIMDBId(id: number) {
    this.movieService.getByIMDBId(id)
      .subscribe(
        data => this.movies = data.results,
        error => this.error = error
      )
  }
}
