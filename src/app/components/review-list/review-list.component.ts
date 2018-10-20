import { Component, OnInit, OnDestroy } from '@angular/core';
import { Review } from '../../models/review.model';
import { BlockChainService } from '../../providers/blockchain.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit, OnDestroy {
  reviews: Review[] = [];
  reviewsSubscription: Subscription;
  constructor(private blockchainService: BlockChainService) { }

  ngOnInit() {
    this.reviewsSubscription = this.blockchainService.getReviewObservable().subscribe((reviews) => {
      this.reviews = reviews;
    });
  }
  ngOnDestroy() {
    this.reviewsSubscription.unsubscribe();
  }

}
