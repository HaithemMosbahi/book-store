import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-add-review',
    template: `
    <input type="textarea" mdInput placeholder="Add review..." [(ngModel)]="reviewContent" > 
      <button md-raised-button color="primary" [disabled]="!reviewContent" (click)="addReviewClicked()"> Add Review </button>
    `,
    styles: [`
      :host{
          display:block;
      }
      textarea,button{
          display: block;
          text-align: center;
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