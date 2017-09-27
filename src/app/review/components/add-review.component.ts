import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-add-review',
    template: `
    <textarea mdInput placeholder="Add review..." [(ngModel)]="reviewContent" ></textarea>
    <button md-raised-button color="primary" [disabled]="!reviewContent" (click)="addReviewClicked()"> Add Review </button>
    `,
    styles: [`
      :host{
          display:block;
          bottom:50px;
      }
      textarea,button{
          display: block;
      }
      textarea {
        width: 100%;
        height: 70px;
        font-size: 15px;
      }
      button{
          float:right;
          right: 20px;
          margin-top:5px;
      }

      
      
    `]
})

export class AddReviewComponent implements OnInit {

    @Output() reviewAdded: EventEmitter<string> = new EventEmitter();
    reviewContent: string = '';

    constructor() { }

    ngOnInit() { }

    addReviewClicked() {
        this.reviewAdded.emit(this.reviewContent);
        this.reviewContent = '';
    }
}