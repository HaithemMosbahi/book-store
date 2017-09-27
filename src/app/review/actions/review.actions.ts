import { Review } from './../models/review.model';
import { Action } from "@ngrx/store";


export const LOAD_REVIEWS = '[Review] load';
export const LOAD_REVIEWS_SUCCESS = '[Review] load success';

export const ADD_REVIEW = '[Review] add';
export const ADD_REVIEW_SUCCESS = '[Review] add success';
export const ADD_REVIEW_FAIL = '[Review] add fail';

export const REMOVE_REVIEW = 'Post remove';
export const REMOVE_REVIEW_SUCCESS = 'Post remove success';
export const REMOVE_REVIEW_FAIL = 'Post remove fail';

export const REVIEW_VOTE = '[Review] vote';
export const REVIEW_VOTE_SUCCESS = '[Review] vote success';
export const REVIEW_VOTE_FAIL = '[Review] vote fail';

/**
 * Load Reviews of the given identifier ( payload )
 * 
 * @export
 * @class LoadReviews
 * @implements {Action}
 */
export class LoadReviews implements Action {
    readonly type = LOAD_REVIEWS;
    
    constructor(public payload: string) {

    }
}

export class LoadReviewsSuccess implements Action {
    readonly type = LOAD_REVIEWS_SUCCESS;

    constructor(public payload: Review[]) {

    }

}


export class ReviewVote implements Action {
    readonly type = REVIEW_VOTE;

    constructor(public payload?: any) {

    }

}

export class ReviewVoteSuccess implements Action {
    readonly type = REVIEW_VOTE_SUCCESS;

    constructor(public payload?: any) {

    }

}
export class ReviewVoteFail implements Action {
    readonly type = REVIEW_VOTE_FAIL;

    constructor(public payload?: any) {

    }

}

export class AddReview implements Action {
    readonly type = ADD_REVIEW;

    constructor(public payload: any) {

    }

}

export class AddReviewSuccess implements Action {
    readonly type = ADD_REVIEW_SUCCESS;

    constructor(public payload?: any) {

    }

}
export class AddReviewFail implements Action {
    readonly type = ADD_REVIEW_FAIL;

    constructor(public payload?: any) {

    }

}

export class RemoveReview implements Action {
    readonly type = REMOVE_REVIEW;

    constructor(public payload: any) {

    }

}

export class RemoveReviewSuccess implements Action {
    readonly type = REMOVE_REVIEW_SUCCESS;

    constructor(public payload?: any) {

    }

}
export class RemoveReviewFail implements Action {
    readonly type = REMOVE_REVIEW_FAIL;

    constructor(public payload?: any) {

    }

}

/**
 * Here we export all the actions as a single type so we can strong type them 
 * when we get to the reducers and effects 
 */

export type All = LoadReviews | LoadReviewsSuccess | ReviewVote | ReviewVoteSuccess |
    ReviewVoteFail | AddReview | AddReviewSuccess | AddReviewFail | RemoveReview
    | RemoveReviewSuccess | RemoveReviewFail;

