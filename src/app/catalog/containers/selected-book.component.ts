import { Router } from '@angular/router';
import { BookNav } from './../models/book-nav';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from './../models/book';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as catalogActions from "./../actions/catalog.actions";
import * as fromBook from './../reducers';

@Component({
    selector: 'app-selected-book',
    template: `
    <div class="selected-book" *ngIf="selectedBook$ | async as book">
    <app-book-navigator [current]="(current$ | async) + 1" [count]="count$ | async" (onNext)="nextBook($event)" (onPrevious)="previousBook($event)"></app-book-navigator>
  
    <table *ngIf="book">
      <td width="50%">
        <img height="70%" [src]="book.image">
      </td>
      <td width="50%">
        <h1>{{book.title}}</h1>
        <p> By {{book.author}} </p>
        <div class="price">{{book.price | currency:'EUR':true }}</div>
        <p> {{book.pages}} pages</p>
        <div [innerHtml]="book.description"></div>
        <button class="add-cart" (click)="addBookToCart(book)" md-raised-button color="primary">ADD TO CART <i class="material-icons">add_shopping_cart</i></button>
      </td>
    </table>
    <p class="review-title">Reviews</p>
    <app-reviews-container [bookId]="book.id"></app-reviews-container>
  
  </div>
    `,
    styles: [
        `
    :host{
        bottom:50px;
    }

    .detail {
        margin: 64px 32px;
        width: 50%;
        max-width: 400px;
        transition: opacity 0.4s;
        opacity: 0;
    }

    .block {
        display: inline-block;
    }

    app-reviews-container{
        margin-left: 15%;
        margin-right: 15%;
    }

    md-grid-list{
        display:block !important;
    }

    .review-title{
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        color: #202020;
        font-size: 1.3em;
        font-weight: 500;
        margin: 32px 0;
    }

    .selected-book {
        margin-left : 10%;
        margin-right: 10%;
        text-align: center;
    }

    td,th {
        vertical-align: middle !important;
    }

    .add-cart{
       margin-top:30px;
    }
        `
    ],
    changeDetection: ChangeDetectionStrategy.OnPush

})

export class SelectedBookComponent implements OnInit {
    bookId: string;
    selectedBook$: Observable<Book>;
    loading$: Observable<boolean>;

    current$: Observable<number>;
    count$: Observable<number>;
    nextId: string;
    previousId: string;

    constructor(private store: Store<fromBook.CatalogState>, private route: ActivatedRoute,
        private router: Router) {
        this.selectedBook$ = this.store.select(fromBook.getSelectedBook);
        this.loading$ = this.store.select(fromBook.getBookLoading);
        this.current$ = this.store.select(fromBook.getCurrent);
        this.count$ = this.store.select(fromBook.getTotal);

        // subscribe to nextId and previousId changes 
        this.store.select(fromBook.getNextId).subscribe(nextId => {
            this.nextId = nextId;
        });

        this.store.select(fromBook.getPreviousId).subscribe(previousId => {
            this.previousId = previousId;
        });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.bookId = params['id'];
            this.store.dispatch(new catalogActions.ViewBook(this.bookId));
        })
    }

    nextBook() {
        console.log('on next book');
        if (this.nextId)
            this.router.navigate(['/catalog/book', this.nextId]);

    }


    previousBook() {
        console.log('on previous book');
        if (this.previousId)
            this.router.navigate(['/catalog/book', this.previousId]);
    }

    addBookToCart(book: Book) {
        this.store.dispatch(new catalogActions.AddToCart(book));
    }
}