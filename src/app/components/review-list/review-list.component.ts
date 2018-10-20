import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Review } from '../../models/review.model';
import { BlockChainService } from '../../providers/blockchain.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit, OnDestroy {
  @Output() selectReview: EventEmitter<Review> = new EventEmitter<Review>();
  reviews: Review[] = [];
  reviewsSubscription: Subscription;
  constructor(private blockchainService: BlockChainService) { }

  ngOnInit() {
    this.reviewsSubscription = this.blockchainService.getReviewObservable().subscribe((reviews) => {
      this.reviews = reviews;
      this.selectReview.emit(this.reviews[1]);
    });
  }
  ngOnDestroy() {
    this.reviewsSubscription.unsubscribe();
  }
  selectedReview (review: Review) {
    this.selectReview.emit(review);
  }

}
