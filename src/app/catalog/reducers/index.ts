import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromBook from './book';
import * as fromCollection from './collection';
import * as fromRoot from '../../core/reducers';

export interface CatalogState {
    book: fromBook.State;
    collection: fromCollection.State;
}

export interface State extends fromRoot.State {
    'catalog': CatalogState;
}

// Catalog feature reducers
export const reducers = {
    book: fromBook.reducer,
    collection: fromCollection.reducer,
};

// Select the catalog slice feature from the store 
export const getCatalogState = createFeatureSelector<CatalogState>('catalog');


export const getCollection = createSelector(
    getCatalogState,
    (state: CatalogState) => state.collection
);


export const getCatalogContent = createSelector(getCollection,
    (state: fromCollection.State) => state.books
)

export const getCatalogLoading = createSelector(getCollection,
    (state: fromCollection.State) => state.loading
) 

export const getBook = createSelector(
    getCatalogState,
    (state: CatalogState) => state.book
);

// Select the selectedBook slice from the Store
export const getSelectedBook = createSelector(
    getBook,
    (state:fromBook.State) => state.selectedBook
)

export const getBookLoading = createSelector(
    getBook,
    (state:fromBook.State) => state.loading
)

export const getCurrent = createSelector(
    getBook,
    (state:fromBook.State) => state.current
)

export const getTotal = createSelector(
    getBook,
    (state:fromBook.State) => state.total
)

export const getNextId = createSelector(
    getBook,
    (state:fromBook.State) => state.nextId
)

export const getPreviousId = createSelector(
    getBook,
    (state:fromBook.State) => state.previousId
)