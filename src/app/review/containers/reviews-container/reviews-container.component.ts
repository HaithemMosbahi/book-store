import { Review } from './../../models/review.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

import * as fromReview from './../../reducers';
import * as reviewActions from './../../actions/review.actions';
import {randomGenerator} from './../../../shared/utils/random-generator';

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
    this.store.dispatch(new reviewActions.RemoveReview({bookId:this.bookId,reviewId:review.$key}));
  }

  voteReview(review, val) {
    let up = val === 1;
    let down = val === -1;
    this.store.dispatch(new reviewActions.ReviewVote({
       review,up,down, bookId:this.bookId
       }));
  }

  addReview(content) {
    let now = new Date();
    let review = {
      text: content,
      upVote: 0,
      downVote: 0,
      user: randomGenerator.randomName(),
      date: now.toString()
    }
    this.store.dispatch(new reviewActions.AddReview({review,bookId:this.bookId}));
  }


}
