import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Review } from '../../models/review.model';
import { MovieService } from '../../providers/movie.service';
import { IBlock } from '../../models/blockchain.model';
import { BlockChainService } from '../../providers/blockchain.service';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.scss']
})
export class ReviewDetailComponent implements OnInit, OnChanges {
  @Input() review: IBlock;
  movieDetails: any;
  verified: boolean;
  constructor(private movieService: MovieService, private blockchainService: BlockChainService) { }

  ngOnInit() {
  }
  ngOnChanges() {
    if (this.review && this.review.data.movieId) {
      this.movieService.getMovieById(this.review.data.movieId).subscribe((movieDetails) => {
        this.movieDetails = movieDetails;
      });
      this.verified = this.blockchainService.verifyHash(this.review.hash, this.review);
    }
  }
}
