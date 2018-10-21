import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IMovie } from '../../models/movie.model';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {
  selectedMovie: IMovie;
  constructor(private cref: ChangeDetectorRef) { }

  ngOnInit() {
  }
  selectMovie(movie: IMovie) {
    this.selectedMovie = movie;
    this.cref.detectChanges();
  }
}
