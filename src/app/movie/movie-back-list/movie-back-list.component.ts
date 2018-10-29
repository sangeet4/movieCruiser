import { MovieBackService } from './../movie-back.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-back-list',
  templateUrl: './movie-back-list.component.html',
  styleUrls: ['./movie-back-list.component.css']
})
export class MovieBackListComponent implements OnInit {

  movies: Array<any>;

  constructor(private movieService: MovieBackService) { }

  ngOnInit() {
    this.movieService.getAll().subscribe(data=>{
      this.movies = data;
    });
  }

}
