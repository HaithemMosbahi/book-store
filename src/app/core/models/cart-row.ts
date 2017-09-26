import { Book } from './../../catalog/models/book';

export class CartRow {

    constructor(
        public book: Book,
        public quantity: number =  1) {}


   amout(){
       return this.book.price * this.quantity;
   }




}