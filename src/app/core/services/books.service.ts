import { BookNav } from './../../catalog/models/book-nav';
import { Book } from './../../catalog/models/book';
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishLast';


const url = "https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/";
const apiKey = "?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i";


@Injectable()
export class BooksService {

  list$: Observable<Book[]>;


  constructor(private http: Http) {
    // keep in cache the last result  
    this.list$ = this.http.get(url + apiKey).map(response => response.json()).publishLast().refCount();

  }

  fetchBooks(): Observable<Book[]> { // Array<Book>
    return this.list$;
  }


  getBook(bookId: string): Observable<BookNav> {
    // return this.http.get(url+bookId+apiKey).map(response => response.json());
    return this.fetchBooks().map(books => {

      const book = books.filter(b => b._id.$oid === bookId)[0];
      const index = books.indexOf(book);
      const count = books.length;
      const previousId = index > 0 ? books[index - 1]._id.$oid : null;
      const nextId = index < count - 1 ? books[index + 1]._id.$oid : null;
      return { book, previousId, nextId, index, count };
    });
  }


}
