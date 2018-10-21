import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Review } from '../../models/review.model';
import { BlockChainService } from '../../providers/blockchain.service';
import { Subscription } from 'rxjs';
import { IBlock } from '../../models/blockchain.model';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit, OnDestroy {
  @Output() selectReview: EventEmitter<IBlock> = new EventEmitter<IBlock>();
  reviews: IBlock[] = [];
  reviewsSubscription: Subscription;
  constructor(private blockchainService: BlockChainService) { }

  ngOnInit() {
    this.blockchainService.parseReviewsFromBlockChain();
    this.reviewsSubscription = this.blockchainService.getReviewObservable().subscribe((reviews) => {
      this.reviews = reviews;
      this.selectReview.emit(this.reviews[0]);
    });
  }
  ngOnDestroy() {
    this.reviewsSubscription.unsubscribe();
  }
  selectedReview (review: IBlock) {
    this.selectReview.emit(review);
  }

}
