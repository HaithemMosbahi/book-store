import { CartRow } from './../models/cart-row';
import { Book } from './../../catalog/models/book';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  rows: CartRow[] = [];

  constructor() { 
  }

  add(book: Book, quantity: number = 1) {
    this.rows.push(new CartRow(book, quantity));
  }

  remove(row: CartRow) {
    this.rows = this.rows.filter(r => r !== row);
  }

  total() {
    return this.rows.reduce((total, row) => {
      return total + row.book.price * row.quantity;
    }, 0)
  }

  count() {
    return this.rows
      .map(row => row.quantity)
      .reduce((count, value) => {
        return count + value;
      }, 0)
  }


  isEmpty() {
    return this.rows.length === 0;
  }

  clear(){
    this.rows = [];
  }

  getCartRows(){
    return this.rows;
  }

}
