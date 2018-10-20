import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MovieService {
   baseUrl =  'http://172.22.5.88:8020/api/movie/';

  constructor(private http: HttpClient) {
  }

  getMovieById(movieId: number) {
    return this.http.get(`${this.baseUrl}${movieId}`);
  }
  getMoviesSearch(searchstring: string) {
    return this.http.get(`${this.baseUrl}getmovielist/${searchstring}`);
  }
}
