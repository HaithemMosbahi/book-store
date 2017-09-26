import { Book } from './book';

/**
 * A model that represents a prev / next navigation 
 * 
 * @export
 * @interface BookNav
 */
export interface BookNav {
    book: Book;
    previousId: string;
    nextId: string;
    index: number;
    count: number;
}