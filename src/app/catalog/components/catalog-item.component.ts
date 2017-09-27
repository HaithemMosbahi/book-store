import { Book } from './../models/book';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-catalog-item',
    template: `
    <md-card>
    <md-card-header>
      
    </md-card-header>
    <img md-card-image [src]="book.image" alt="Photo of a book">
    <md-card-content>
      <p>
        <a  (click)="bookDetails.emit(book)">{{book.title}}</a>
      </p>
      
    
    </md-card-content>
    <md-card-actions>
      <button md-button (click)="addToCart.emit(book)" > <i class="material-icons">add_shopping_cart</i></button>
      <button md-button (click)="bookDetails.emit(book)" > <i class="material-icons">search</i></button>
    </md-card-actions>
  </md-card>
    `,
    styles: [
        `
        md-card {
            width: 240px;
            height: 260px;
            margin: 15px;
          }
          @media only screen and (max-width: 768px) {
            md-card {
              margin: 15px 0 !important;
            }
          }
          md-card:hover {
            box-shadow: 3px 3px 16px -2px rgba(0, 0, 0, .5);
          }
          md-card-title {
            margin-right: 10px;
          }
          md-card-title-group {
            margin: 0;
          }
          a {
            color: inherit;
            text-decoration: none;
            cursor:pointer;
          }
          img {
            width: 170px;
            min-width: 60px;
            height: 174px;
          }
          md-card-content {
            margin-top: 15px;
            margin: 0px 0 0;
          }
          span {
            display: inline-block;
            font-size: 13px;
          }
          md-card-footer {
            padding: 0 5px 5px;
          }

          md-card-actions{
              margin-top:10px;
          }
      `
    ]
})

export class CatalogItemComponent implements OnInit {

    @Input() book: Book;

    @Output() addToCart: EventEmitter<any> = new EventEmitter();
    @Output() bookDetails: EventEmitter<any> = new EventEmitter();


    constructor() { }

    ngOnInit() { }
}