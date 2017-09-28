
import { reducer } from './book';
import * as fromBooks from './book';
import { SelectBook, ViewBook } from './../actions/catalog.actions';
import { Book, mockBook } from '../models/book';

describe('BookReducer', () => {
  const book1 = mockBook();
  const book2 = { ...book1, id: '2' };
  const book3 = { ...book1, id: '3' };
  const initialState: fromBooks.State = {
    selectedId: book1.id,
    selectedBook: book1,
    loading: false,
    current: 1,
    total: 3,
    nextId: book2.id,
    previousId: book3.id
  };

  const stateWhenBookIsSelected: fromBooks.State = {
    selectedId: book1.id,
    selectedBook: null,
    loading: true,
    current: 0,
    total: 0,
    nextId: null,
    previousId: null
  }

  describe('undefined action', () => {
    it('should return the default state', () => {
      const result = reducer(undefined, {} as any);

      expect(result).toEqual(fromBooks.initialState);
    });
  });

  describe('view book action', () => {
    it('should return a new state with the selected book id', () => {
      // create view action with bookId = 1
      const viewBook = new ViewBook(book1.id);
      const result = reducer(undefined, viewBook);

      expect(result).toEqual(stateWhenBookIsSelected);
    });
  });

});

