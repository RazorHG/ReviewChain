import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MovieService } from '../../providers/movie.service';
import { IMovie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-selection',
  templateUrl: './movie-selection.component.html',
  styleUrls: ['./movie-selection.component.scss']
})
export class MovieSelectionComponent implements OnInit {
  @Output() movieSelectedEvent: EventEmitter<IMovie> = new EventEmitter<IMovie>();
  movieSearch: string;
  movieResults: IMovie[];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }
  searchMovies() {
    this.movieService.getMoviesSearch(this.movieSearch).subscribe((results) => {
      this.movieResults = results;
    });
  }
  createReview(movie: IMovie) {
    this.movieSelectedEvent.emit(movie);
  }
}
