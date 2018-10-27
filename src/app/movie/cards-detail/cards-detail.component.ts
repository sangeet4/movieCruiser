import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movie';

@Component({
  selector: 'app-cards-detail',
  templateUrl: './cards-detail.component.html',
  styleUrls: ['./cards-detail.component.css']
})
export class CardsDetailComponent implements OnInit {

  constructor() { }
  detail : IMovie = {
    id : 1,
    video : true,
    vote_count: 12,
    vote_average: 3.8,
    title: 'abc',
    popularity: 1,
    original_language: 'hin',
    original_title: 'string',
    genre_ids: 12,
    adult: true,
    overview: 'lorem ipsum',
    poster_path: 'sghsjh',
    backdrop_path: 'sjhjhs',
    release_date: 2018

  };
  added : boolean = true;

  ngOnInit() {
  }

}
