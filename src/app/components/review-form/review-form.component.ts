import { Component, OnInit, Input } from '@angular/core';
import { Peer2PeerService } from '../../providers/peer2peer.service';
import { IMovie } from '../../models/movie.model';
import { Review } from '../../models/review.model';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {
  @Input() movie: IMovie = {id: 1, name: 'Test Movie'};
  @Input() user: string;
  message = '';
  movieRating = 4;
  constructor(private peer2peerService: Peer2PeerService) { }

  ngOnInit() {
  }
  sendMessage() {
    const review: Review = new Review(this.user, this.movieRating, this.movie.id, this.message);
    this.peer2peerService.addReview(review).subscribe();
  }
}
