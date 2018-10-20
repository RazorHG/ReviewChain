import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Review } from '../../models/review.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedReview: Review;
  constructor(private cref: ChangeDetectorRef) { }

  ngOnInit() {
  }
  setReviewDetail(review: Review) {
    this.selectedReview = {...review};
    this.cref.detectChanges();
  }
}
