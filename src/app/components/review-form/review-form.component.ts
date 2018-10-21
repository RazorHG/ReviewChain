import { Component, OnInit, Input } from '@angular/core';
import { Peer2PeerService } from '../../providers/peer2peer.service';
import { IMovie } from '../../models/movie.model';
import { Review } from '../../models/review.model';
import { BlockChainService } from '../../providers/blockchain.service';
import { Router } from '@angular/router';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {
  @Input() movie: IMovie;
  user: string;
  message = '';
  movieRating = 4;
  constructor(private peer2peerService: Peer2PeerService,
     private blockchainService: BlockChainService,
     private router: Router,
     private userService: UserService
    ) { }

  ngOnInit() {
    this.user = this.userService.userName;
  }
  sendMessage() {
    const review: Review = new Review(this.user, this.movieRating, this.movie.Id, this.message, this.movie.OriginalTitle);
    this.peer2peerService.addReview(review).subscribe(() => {
      this.blockchainService.parseReviewsFromBlockChain();
      this.router.navigate(['/']);
    });
  }
}
