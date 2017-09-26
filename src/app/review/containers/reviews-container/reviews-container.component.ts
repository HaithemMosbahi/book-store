import { Review } from './../../models/review.model';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import * as fromReview from './../../reducers';
import * as reviewActions from './../../actions/review.actions';

@Component({
  selector: 'app-reviews-container',
  templateUrl: './reviews-container.component.html',
  styleUrls: ['./reviews-container.component.css']
})
export class ReviewsContainerComponent implements OnInit,OnChanges {

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
     if(changes.bookId.currentValue !== changes.bookId.previousValue){
       // load reviews when book id change
       this.loadReviews();
     }
  }

  loadReviews() {
    this.store.dispatch(new reviewActions.LoadReviews(this.bookId));

  }


}
