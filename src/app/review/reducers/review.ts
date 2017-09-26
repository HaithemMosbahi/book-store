import { Review } from './../models/review.model';
import * as reviewActions from './../actions/review.actions';

export interface State {
    bookId: string | null;
    reviews: Review[];
    loading: boolean;
}

export const initialState: State = {
    bookId: null,
    reviews: [],
    loading: false
}

export function reducer(state:State = initialState,action:reviewActions.All){
    switch (action.type) {
        case reviewActions.LOAD_REVIEWS:
           return {...state,bookId: action.payload,loading:true};
        
        case reviewActions.LOAD_REVIEWS_SUCCESS:
            return {...state,reviews: action.payload.slice(),loading:false};
         
        default:
            return state;
    }
}

