import { ShareService } from './../share.service';
import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [MovieService]
})

export class MovieListComponent implements OnInit {

  public movies = [];
  public error;

  subs: Subscription;
  searchInput;

  ngOnInit() { }

  constructor(private movieService: MovieService, private service: ShareService) {
    this.subs = service.subj1$.subscribe(val => {
      this.searchInput = val;
      this.findByMovieName();
      console.log(val);
    })
  }

  findByMovieName() {
    this.movieService.getMovies(this.searchInput)
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
