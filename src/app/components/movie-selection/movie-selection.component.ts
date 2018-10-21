import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MovieService } from '../../providers/movie.service';
import { IMovie } from '../../models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-selection',
  templateUrl: './movie-selection.component.html',
  styleUrls: ['./movie-selection.component.scss']
})
export class MovieSelectionComponent implements OnInit {
  movieSearch: string;
  movieResults: IMovie[];
  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
  }
  searchMovies() {
    this.movieService.getMoviesSearch(this.movieSearch).subscribe((results) => {
      this.movieResults = results;
    });
  }
  createReview(movie: IMovie) {
    this.movieService.selectedMovie = movie;
    this.router.navigate(['/addreview']);
  }
}
