import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../../models/review.model';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.scss']
})
export class ReviewDetailComponent implements OnInit {
  @Input() review: Review = new Review('John Doe', 4, 1, 'Good Movie. Would watch again');
  constructor() { }

  ngOnInit() {
  }

}
