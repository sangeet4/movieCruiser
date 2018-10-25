import { IMovie } from './movie';
import { APIK } from '../../config/prod';
import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class MovieService {
  
  constructor(private http: HttpClient) { }

  private searchUrl: string = 'https://api.themoviedb.org/3/search/movie?api_key='+APIK.getKey()+'&query=';   
          
  private IMDB_id: string = '}?api_key='+APIK.getKey()+'&language=en-US&external_source=imdb_id';

  getMovies(name:string){
    console.log('query: '+ this.searchUrl+name)
    let res
    try {
      res = this.http.get<IMovie[]>(this.searchUrl+name)
    }
    catch(err) {
      this.errorHandler(err)
    }
    return res;
  }

  getByIMDBId(id: number){
    console.log('https://api.themoviedb.org/3/find/{'+id+this.IMDB_id)
    let res;
    try {
      res = this.http.get<IMovie[]>('https://api.themoviedb.org/3/find/{'+id+this.IMDB_id)
    }
    catch(err) {
      this.errorHandler(err)
    }
    return res;
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server error")
  }

  

}
