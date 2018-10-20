import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Review } from '../../models/review.model';
import { MovieService } from '../../providers/movie.service';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.scss']
})
export class ReviewDetailComponent implements OnInit, OnChanges {
  @Input() review: Review = new Review('John Doe', 4, 1, 'Good Movie. Would watch again', 'Test Hard');
  movieDetails: any;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }
  ngOnChanges() {
    if (this.review && this.review.movieId) {
      this.movieService.getMovieById(this.review.movieId).subscribe((movieDetails) => {
        this.movieDetails = movieDetails;
      });
    }

  }

}
