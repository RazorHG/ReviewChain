import { Review } from './review.model';

export interface IBlockChain {
    blockchain: IBlock[];
    difficulty: number;
}

export interface IBlock {
    index: number;
    previousHash: string;
    timestamp: number;
    data: Review;
    hash: string;
    nonce: number;

}
