import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieBack } from './movie-back';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class MovieBackService {

  public base_url = 'http://localhost:8080/application/api/v1/movie'

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.base_url);
  }
  
  addMovie(movie : MovieBack) {
    return this.http.post(this.base_url, movie);
  }

  deleteMovie(movie : MovieBack){
    return this.http.delete(this.base_url+"/"+movie.id);
  }




}
