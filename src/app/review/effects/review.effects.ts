import { mergeMap, map, catchError } from 'rxjs/operators';

// effects are just like any angular service
// Angular service is a singletone class that can be injected into
// any angular concept :
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import * as reviewActions from './../actions/review.actions';
export type Action = reviewActions.All;

/**
 * Side Effects for the Review Module.
 *
 * @export
 * @class ReviewEffects
 */

@Injectable()
export class ReviewEffects {
  constructor(private db: AngularFireDatabase, private actions$: Actions) {}

  @Effect()
  loadReviews: Observable<Action> = this.actions$.pipe(
    ofType(reviewActions.LOAD_REVIEWS),
    map((action: reviewActions.LoadReviews) => action.payload),
    //.delay(2000) // just to show a spinner
    mergeMap(payload => this.db.list(`/reviews/${payload}/all`)),
    map(reviews => new reviewActions.LoadReviewsSuccess(reviews))
  );

  @Effect()
  reviewVote: Observable<Action> = this.actions$.pipe(
    ofType(reviewActions.REVIEW_VOTE),
    map((action: reviewActions.ReviewVote) => action.payload),
    mergeMap(payload =>
      of(
        this.db
          .object(`/reviews/${payload.bookId}/all/${payload.review.$key}`)
          .update({
            upVote: payload.review.upVote + (payload.up ? 1 : 0),
            downVote: payload.review.downVote + (payload.down ? 1 : 0)
          })
      )
    ),
    map(() => new reviewActions.ReviewVoteSuccess()),
    catchError(err =>
      of(new reviewActions.ReviewVoteFail({ error: err.message }))
    )
  );

  @Effect()
  addReview = this.actions$.pipe(
    ofType(reviewActions.ADD_REVIEW),
    map((action: reviewActions.AddReview) => action.payload),
    mergeMap(payload =>
      this.db.list(`/reviews/${payload.bookId}/all`).push(payload.review)
    ),
    map(() => new reviewActions.AddReviewSuccess()),
    catchError(err =>
      of(new reviewActions.AddReviewFail({ error: err.message }))
    )
  );

  @Effect()
  removeReview = this.actions$.pipe(
    ofType(reviewActions.REMOVE_REVIEW),
    map((action: reviewActions.RemoveReview) => action.payload),
    mergeMap(payload =>
      this.db
        .object(`/reviews/${payload.bookId}/all/${payload.reviewId}`)
        .remove()
    ),
    map(() => new reviewActions.RemoveReviewSuccess()),
    catchError(err =>
      of(new reviewActions.RemoveReviewFail({ error: err.message }))
    )
  );
}
