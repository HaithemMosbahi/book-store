
import {refCount, publishLast, map} from 'rxjs/operators';
import { BookNav } from './../models/book-nav';
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs";



import { Book } from "../models/book";

const url = "https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/";
const apiKey = "?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i";


@Injectable()
export class CatalogService {

  list$: Observable<Book[]>;


  constructor(private http: Http) {
    // keep in cache the last result  
    this.list$ = this.http.get(url + apiKey).pipe(map(response => response.json()),publishLast(),refCount(),);

  }

  fetchBooks(): Observable<Book[]> { // Array<Book>
    return this.list$;
  }


  getBook(bookId: string): Observable<BookNav> {
    // return this.http.get(url+bookId+apiKey).map(response => response.json());
    return this.fetchBooks().pipe(map(books => {

      const book = books.filter(b => b.id === bookId)[0];
      const index = books.indexOf(book);
      const count = books.length;
      const previousId = index > 0 ? books[index - 1].id : null;
      const nextId = index < count - 1 ? books[index + 1].id : null;
      return { book, previousId, nextId, index, count };
    }));
  }



}
