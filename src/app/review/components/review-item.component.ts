import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-review-item',
    template: `
    <md-card>
    <md-card-header>
    <div md-card-avatar>
    <ngx-avatar [src]="_randomAvatarUrl()" ></ngx-avatar>  
    
    </div>
    <md-card-title>{{user}}</md-card-title>
    <md-card-subtitle>Posted {{date | amTimeAgo}}</md-card-subtitle>

  </md-card-header>
  <md-card-content>
  <p style="font-size: 15px;">
  {{text}} 
  </p>
  </md-card-content>
  <md-card-actions>
  <div><span class="vote">{{upVote}}</span> <a (click)="upVoteClicked.emit()"> <i style="cursor: pointer;" class="material-icons">thumb_up</i></a>
  </div> <div><span class="vote">{{downVote}}</span> <a (click)="downVoteClicked.emit()"> <i style="cursor: pointer;" class="material-icons">thumb_down</i></a>
  </div><div><a (click)="removeReview.emit()"> <i style="cursor: pointer;" class="material-icons">close</i></a>
  </div></md-card-actions>
</md-card>
  
    `,
    styles: [`
      :host{
          display:block;
          margin-top:5px;
      }
      div {
          display: inline-block;
          margin-right:15PX;
      }

      .vote{
        font-size: 19px;
        vertical-align: bottom;
      }

    `]
})

export class ReviewItemComponent implements OnInit {

    @Input() user: string;
    @Input() text: string;
    @Input() date: string;
    @Input() upVote: number;
    @Input() downVote: number;
    @Output() upVoteClicked: EventEmitter<any> = new EventEmitter();
    @Output() downVoteClicked: EventEmitter<any> = new EventEmitter();
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