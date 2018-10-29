import { MovieBackService } from './../movie-back.service';
import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movie';
import { ActivatedRoute, Router } from '@angular/router';
import {MovieBack} from '../movie-back';
@Component({
  selector: 'app-cards-detail',
  templateUrl: './cards-detail.component.html',
  styleUrls: ['./cards-detail.component.css']
})
export class CardsDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private R: Router, private backS: MovieBackService) { }

  sub: any;

  detail;
  added: boolean = true;
  resp;
  movie;
  
  ngOnInit() {
    this.movie={};
    this.route.queryParams
      .subscribe(
        params => {
          this.detail = params;
        }
      )
  }

  gotoList(){
    this.R.navigate(['/added']);
  }

  onClick(){
    this.movie = new MovieBack();
    this.movie.id = this.detail.id;
    this.movie.movieTitle = this.detail.title;
    this.movie.posterUrl = this.detail.poster_path;
    this.movie.rating = this.detail.vote_average;
    this.movie.yearOfRelease = this.detail.release_date;
    this.movie.comments="";
    
    this.backS.addMovie(this.movie).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
