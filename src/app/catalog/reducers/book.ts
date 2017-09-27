import { BookNav } from './../models/book-nav';
import { Book } from './../models/book';
import * as catalogActions from '../actions/catalog.actions';

export interface State {
    selectedId: string | null;
    selectedBook: Book | null;
    loading: boolean;
    current: number;
    total: number;
    nextId: string | null;
    previousId: string | null;
}

export const initialState: State = {
    selectedId: null,
    selectedBook: null,
    loading: false,
    current: 0,
    total: 0,
    nextId: null,
    previousId: null
};

export function reducer(state = initialState, action: catalogActions.ActionType): State {
    switch (action.type) {
        case catalogActions.VIEW_BOOK:
            return { ...state, selectedId: action.payload, loading: true };
        case catalogActions.VIEW_BOOK_SUCCESS:
            return {
                ...state,
                selectedBook: action.payload.book,
                current: action.payload.index,
                total: action.payload.count,
                nextId: action.payload.nextId,
                previousId: action.payload.previousId,
                loading: false
            }
        default:
            return state;
    }
}

export const getSelectedId = (state: State) => state.selectedId;

export const getSelectedBook = (state: State) => state.selectedBook;

export const getLoading = (state: State) => state.loading;

export const getCurrent = (state: State) => state.current;

export const getTotal = (state: State) => state.total;

export const getNextId = (state: State) => state.nextId;

export const getPreviousId = (state: State) => state.previousId;