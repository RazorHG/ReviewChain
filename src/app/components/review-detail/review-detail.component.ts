import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Review } from '../../models/review.model';
import { MovieService } from '../../providers/movie.service';
import { IBlock } from '../../models/blockchain.model';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.scss']
})
export class ReviewDetailComponent implements OnInit, OnChanges {
  @Input() review: IBlock;
  movieDetails: any;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }
  ngOnChanges() {
    if (this.review && this.review.data.movieId) {
      this.movieService.getMovieById(this.review.data.movieId).subscribe((movieDetails) => {
        this.movieDetails = movieDetails;
      });
    }

  }

}
