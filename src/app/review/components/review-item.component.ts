import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-review-item',
    template: `
    <md-card>
    <md-card-header>
    <div md-card-avatar>
    <ngx-avatar [src]="_randomAvatarUrl()" ></ngx-avatar>  
    
    </div>
    <md-card-title>Shiba Inu</md-card-title>
    <md-card-subtitle>Dog Breed</md-card-subtitle>

  </md-card-header>
  <md-card-content>
  <p>
  {{text}} 
  </p>
  </md-card-content>
  <md-card-actions>
  {{votes}} <a (click)="upVote.emit()"> <i style="cursor: pointer;" class="material-icons">thumb_up</i></a>
  <a (click)="downVote.emit()"> <i style="cursor: pointer;" class="material-icons">thumb_down</i></a>
  <a (click)="removeReview.emit()"> <i style="cursor: pointer;" class="material-icons">close</i></a>
  </md-card-actions>


</md-card>
  
    `,
    styles: [`
      :host{
          display:block;
          margin-top:5px;
      }
      div {
          display: inline-block;
          margin-right:25px;
      }
    `]
})

export class ReviewItemComponent implements OnInit {

    @Input() user: string;
    @Input() text: string;
    @Input() votes: number;
    @Output() upVote: EventEmitter<any> = new EventEmitter();
    @Output() downVote: EventEmitter<any> = new EventEmitter();
    @Output() removeReview: EventEmitter<any> = new EventEmitter();

    randomAvatarKey: string;


    constructor() { }

    ngOnInit() {
        this.randomAvatarKey = this._generateRandomKey();
    }


    _randomAvatarUrl() {
        return `http://api.adorable.io/avatars/${this.user}`;

    }

    // random string of 4 characters
    _generateRandomKey() {
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";

        for (let i = 0; i < 5; i++)
            result += possible.charAt(Math.floor(Math.random() * possible.length));

        return result;
    }


}