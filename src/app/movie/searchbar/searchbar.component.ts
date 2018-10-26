import { MovieListComponent } from './../movie-list/movie-list.component';
import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent implements OnInit {

  constructor(private servcie: ShareService) { }
  movieName: string;

  ngOnInit() { }

  bhejo() {
    console.log(this.movieName)
    this.servcie.send(this.movieName)
  }

}
