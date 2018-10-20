import { Injectable } from '@angular/core';
import { Review } from '../models/review.model';
import { IBlockChain } from '../models/blockchain.model';
import { Peer2PeerService } from './peer2peer.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable()
export class BlockChainService {
  reviews: BehaviorSubject<Review[]> = new BehaviorSubject([]);

  constructor(private peer2peerService: Peer2PeerService) {
  }
  parseReviewsFromBlockChain() {
      this.peer2peerService.getBlockChain().subscribe((blockChain) => {
        const reviews = blockChain.blockchain.map((block) => block.data, []);
        this.reviews.next(reviews);
      });
  }
  getReviewObservable() {
      return this.reviews;
  }


}
