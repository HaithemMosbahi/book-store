
/**
 * Contract of a Book
 * 
 * @export
 * @interface Book
 */
export interface Book {
    id: string;
    isbn10?: string;
    title: string;
    author: string;
    price: number;
    pages?: number;
    rating?: number;
    votes?: number;
    image?: string;
    description?: string;
}