import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from '../models/movie.model';


@Injectable()
export class MovieService {
   baseUrl =  'http://172.22.5.88:8020/api/movie/';
   selectedMovie: IMovie;
  constructor(private http: HttpClient) {
  }

  getMovieById(movieId: number) {
    return this.http.get(`${this.baseUrl}${movieId}`);
  }
  getMoviesSearch(searchstring: string) {
    return this.http.get<IMovie[]>(`${this.baseUrl}getmovielist/${searchstring}`);
  }
}
