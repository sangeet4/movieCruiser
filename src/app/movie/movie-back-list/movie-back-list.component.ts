import { MovieBackService } from './../movie-back.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieBack } from '../movie-back';

@Component({
  selector: 'app-movie-back-list',
  templateUrl: './movie-back-list.component.html',
  styleUrls: ['./movie-back-list.component.css']
})
export class MovieBackListComponent implements OnInit {

  movies: Array<any>;
  mov: MovieBack
  constructor(private movieService: MovieBackService, private router: Router) { }

  ngOnInit() {
    this.movieService.getAll().subscribe(data=>{
      this.movies = data;
    });
  }

  delete(id: Number){
    this.movieService.deleteMovie(id).subscribe(
      data=>{
        this.router.navigate(['/redirectMe'])
      }
    )
  }

  searchMovieById(id: number): MovieBack {
    for(let movie of this.movies) {
      if(movie.id == id) {
        return movie;
      }
    }
    return null;
  }

  update(id:number,comments: string) {
    this.movieService.updateMovie(id,comments)
      .subscribe(
        data => {
          this.searchMovieById(id).comments = comments
        }
      )
    this.router.navigate(['update',id,comments]);
  }
}
