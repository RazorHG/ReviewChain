export interface IReview {
    userName: string;
    rating: number;
    movieId: number;
    textReview: string;
    movieName: string;
}

export class Review implements IReview {
    constructor(
        public userName,
        public rating,
        public movieId,
        public textReview,
        public movieName
    ) {}
}
