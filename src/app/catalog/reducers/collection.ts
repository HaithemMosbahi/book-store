import { Book } from './../models/book';
import * as catalogActions from './../actions/catalog.actions';

export interface State {
    loading: boolean,
    books: Book[]
}

export const initialState: State = {
    loading: false,
    books: []
}

export function reducer(state = initialState, action: catalogActions.ActionType): State {
    switch (action.type) {
        case catalogActions.LOAD_BOOKS:
            return { ...state, loading: true }
        case catalogActions.LOAD_BOOKS_SUCCESS:
            return { ...state, books: action.payload, loading: false }

        default:
            return state;
    }
}

export const getBooks = (state: State) => state.books;
export const getLoading = (state: State) => state.loading;