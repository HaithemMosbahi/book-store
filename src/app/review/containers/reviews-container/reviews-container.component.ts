import { Review } from './../../models/review.model';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

import * as fromReview from './../../reducers';
import * as reviewActions from './../../actions/review.actions';

@Component({
  selector: 'app-reviews-container',
  templateUrl: './reviews-container.component.html',
  styleUrls: ['./reviews-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class ReviewsContainerComponent implements OnInit, OnChanges {

  @Input() bookId: string;

  loading$: Observable<boolean>;
  reviews$: Observable<Review[]>;

  constructor(private store: Store<fromReview.State>) {
    this.loading$ = this.store.select(fromReview.getLoading);
    this.reviews$ = this.store.select(fromReview.getListOfReviews);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.bookId.currentValue !== changes.bookId.previousValue) {
      // load reviews when book id value has changed
      this.loadReviews();
    }
  }

  loadReviews() {
    this.store.dispatch(new reviewActions.LoadReviews(this.bookId));

  }

  removeReview(review) {
    this.store.dispatch(new reviewActions.RemoveReview(review.$key));
  }

  voteReview(review, val) {
    this.store.dispatch(new reviewActions.ReviewVote({ review, val }));
  }

  addReview(content) {
    let now = new Date();
    let review = {
      text: content,
      votes: 0,
      date: now.toString()
    }
    this.store.dispatch(new reviewActions.AddReview(review));
  }


}
