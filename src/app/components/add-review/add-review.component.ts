import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IMovie } from '../../models/movie.model';
import { MovieService } from '../../providers/movie.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {
  selectedMovie: IMovie;
  constructor(private cref: ChangeDetectorRef, private movieService: MovieService) { }

  ngOnInit() {
    this.selectedMovie = this.movieService.selectedMovie;
  }

}
